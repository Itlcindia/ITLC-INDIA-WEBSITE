import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheDelete } from "@/lib/redis";
import { saveUploadedFile } from "@/lib/upload";
import { localStore } from "@/lib/local-store";

/**
 * GET /api/admin/certificates
 * List all certificates with search, status filtering, and pagination.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";
  const status = searchParams.get("status")?.trim() || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "50", 10);
  const skip = (page - 1) * limit;

  try {
    const where: any = {};

    if (q) {
      where.OR = [
        { certificateNumber: { contains: q } },
        { studentName: { contains: q } },
        { courseName: { contains: q } },
      ];
    }

    if (status && status !== "ALL") {
      where.status = status;
    }

    const dbPromise = Promise.all([
      prisma.certificate.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.certificate.count({ where }),
    ]);

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 400)
    );

    const result = await Promise.race([dbPromise, timeoutPromise]);
    if (result) {
      const [certificates, total] = result;
      return NextResponse.json({
        success: true,
        certificates,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    }
  } catch {
    // Database offline or timed out
  }

  // Instant fallback from localStore (0ms)
  const localCerts = localStore.getCertificates(q, status);
  const paginated = localCerts.slice(skip, skip + limit);

  return NextResponse.json({
    success: true,
    certificates: paginated,
    pagination: {
      total: localCerts.length,
      page,
      limit,
      totalPages: Math.ceil(localCerts.length / limit) || 1,
    },
  });
}

/**
 * POST /api/admin/certificates
 * Issue a new certificate. Supports JSON or FormData (with PDF file upload).
 */
export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: any = {};
    let certificateFileUrl = "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      data = {
        certificateNumber: String(formData.get("certificateNumber") || "").trim().toUpperCase(),
        studentName: String(formData.get("studentName") || "").trim(),
        courseName: String(formData.get("courseName") || "").trim(),
        startDate: String(formData.get("startDate") || "").trim() || null,
        completionDate: String(formData.get("completionDate") || "").trim() || null,
        issueDate: String(formData.get("issueDate") || "").trim() || null,
        expiryDate: String(formData.get("expiryDate") || "").trim() || null,
        dateOfBirth: String(formData.get("dateOfBirth") || "").trim() || null,
        verificationId: String(formData.get("verificationId") || "").trim() || null,
        status: String(formData.get("status") || "VERIFIED").trim().toUpperCase(),
        revokedReason: String(formData.get("revokedReason") || "").trim() || null,
      };

      const file = formData.get("certificateFile");
      if (file instanceof File && file.size > 0) {
        certificateFileUrl = await saveUploadedFile(file, "certificates");
      } else {
        certificateFileUrl = String(formData.get("certificateFileUrl") || "").trim();
      }
    } else {
      data = await request.json();
      if (data.certificateNumber) {
        data.certificateNumber = String(data.certificateNumber).trim().toUpperCase();
      }
      certificateFileUrl = data.certificateFileUrl || "";
    }

    if (!data.certificateNumber || !data.studentName || !data.courseName) {
      return NextResponse.json(
        { success: false, error: "Certificate Number, Student Name, and Course Name are required." },
        { status: 400 }
      );
    }

    // Check duplicate
    const existing = await prisma.certificate.findUnique({
      where: { certificateNumber: data.certificateNumber },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, error: `Certificate #${data.certificateNumber} already exists!` },
        { status: 409 }
      );
    }

    const newCert = await prisma.certificate.create({
      data: {
        certificateNumber: data.certificateNumber,
        studentName: data.studentName,
        courseName: data.courseName,
        startDate: data.startDate || null,
        completionDate: data.completionDate || null,
        issueDate: data.issueDate || new Date().toISOString().split("T")[0],
        expiryDate: data.expiryDate || null,
        dateOfBirth: data.dateOfBirth || null,
        verificationId: data.verificationId || `ITLC-CERT-${Date.now().toString().slice(-6)}`,
        certificateFileUrl: certificateFileUrl || null,
        status: data.status === "REVOKED" ? "REVOKED" : "VERIFIED",
        revokedReason: data.revokedReason || null,
      },
    });

    // Invalidate Redis cache
    await cacheDelete(`cert:${data.certificateNumber}`);

    return NextResponse.json({
      success: true,
      message: "Certificate issued successfully",
      certificate: newCert,
    });
  } catch (error: any) {
    console.error("Admin issue certificate error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to issue certificate" },
      { status: 500 }
    );
  }
}
