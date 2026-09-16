import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheGet, cacheSet, rateLimit } from "@/lib/redis";
import { localStore } from "@/lib/local-store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawCert = searchParams.get("certificate");
  const certificate = rawCert?.trim().toUpperCase();

  if (!certificate || !/^[A-Z0-9/_-]+$/.test(certificate)) {
    return NextResponse.json(
      { success: false, error: "Invalid certificate number format" },
      { status: 400 }
    );
  }

  // Rate Limiting: 60 requests per minute per IP
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
  const isAllowed = await rateLimit(`rate:cert:${ip}`, 60, 60);

  if (!isAllowed) {
    return NextResponse.json(
      { success: false, error: "Too many verification requests. Please wait a minute." },
      { status: 429 }
    );
  }

  try {
    // 1. Check Redis Cache First
    const cacheKey = `cert:${certificate}`;
    const cachedData = await cacheGet<any>(cacheKey);
    if (cachedData) {
      return NextResponse.json(cachedData, {
        headers: { "X-Cache": "HIT", "Cache-Control": "public, max-age=60" },
      });
    }

    // 2. Query MySQL via Prisma
    let certRecord = null;
    try {
      certRecord = await prisma.certificate.findUnique({
        where: { certificateNumber: certificate },
      });
    } catch {
      // Database offline or timed out - seamlessly continue to localStore
    }

    if (certRecord) {
      const isExpired = certRecord.expiryDate && certRecord.expiryDate !== "0000-00-00"
        ? new Date(certRecord.expiryDate) < new Date()
        : false;

      const normalizedData = {
        success: true,
        certificate: {
          id: certRecord.id,
          certificate_number: certRecord.certificateNumber,
          student_name: certRecord.studentName,
          course_name: certRecord.courseName,
          start_date: certRecord.startDate || "",
          completion_date: certRecord.completionDate || "",
          issue_date: certRecord.issueDate || "",
          expiry_date: certRecord.expiryDate || "",
          date_of_birth: certRecord.dateOfBirth || "",
          verification_id: certRecord.verificationId || "ITLC-VERIFIED",
          status: certRecord.status === "VERIFIED" ? "Verified" : "Revoked",
          certificate_file: certRecord.certificateFileUrl || "",
          certificate_file_url: certRecord.certificateFileUrl || "",
          revoked_reason: certRecord.revokedReason || null,
        },
        certificate_number: certRecord.certificateNumber,
        student_name: certRecord.studentName,
        course_name: certRecord.courseName,
        start_date: certRecord.startDate || "",
        completion_date: certRecord.completionDate || "",
        issue_date: certRecord.issueDate || "",
        expiry_date: certRecord.expiryDate || "",
        date_of_birth: certRecord.dateOfBirth || "",
        verification_id: certRecord.verificationId || "ITLC-VERIFIED",
        status: certRecord.status === "VERIFIED" ? "Verified" : "Revoked",
        certificate_file: certRecord.certificateFileUrl || "",
        certificate_file_url: certRecord.certificateFileUrl || "",
        expired: isExpired,
        revoked_reason: certRecord.revokedReason || null,
      };

      // Store in Redis cache for 1 hour (3600s)
      await cacheSet(cacheKey, normalizedData, 3600);

      return NextResponse.json(normalizedData, {
        headers: { "X-Cache": "MISS-MYSQL", "Cache-Control": "public, max-age=60" },
      });
    }

    // 3. Fallback to localStore for 100% Offline & Local Verification
    const localCerts = localStore.getCertificates();
    const localCert = localCerts.find(
      c => c.certificateNumber.toUpperCase() === certificate || c.verificationId.toUpperCase() === certificate
    );

    if (localCert) {
      const isExpired = localCert.expiryDate && localCert.expiryDate !== "0000-00-00"
        ? new Date(localCert.expiryDate) < new Date()
        : false;

      const normalizedLocalData = {
        success: true,
        certificate: {
          id: localCert.id,
          certificate_number: localCert.certificateNumber,
          student_name: localCert.studentName,
          course_name: localCert.courseName,
          start_date: localCert.startDate || "",
          completion_date: localCert.completionDate || "",
          issue_date: localCert.issueDate || "",
          expiry_date: localCert.expiryDate || "",
          date_of_birth: localCert.dateOfBirth || "",
          verification_id: localCert.verificationId || "ITLC-VERIFIED",
          status: localCert.status === "VERIFIED" ? "Verified" : "Revoked",
          certificate_file: localCert.certificateFileUrl || "",
          certificate_file_url: localCert.certificateFileUrl || "",
          revoked_reason: localCert.revokedReason || null,
        },
        certificate_number: localCert.certificateNumber,
        student_name: localCert.studentName,
        course_name: localCert.courseName,
        start_date: localCert.startDate || "",
        completion_date: localCert.completionDate || "",
        issue_date: localCert.issueDate || "",
        expiry_date: localCert.expiryDate || "",
        date_of_birth: localCert.dateOfBirth || "",
        verification_id: localCert.verificationId || "ITLC-VERIFIED",
        status: localCert.status === "VERIFIED" ? "Verified" : "Revoked",
        certificate_file: localCert.certificateFileUrl || "",
        certificate_file_url: localCert.certificateFileUrl || "",
        expired: isExpired,
        revoked_reason: localCert.revokedReason || null,
      };

      return NextResponse.json(normalizedLocalData, {
        headers: { "X-Cache": "LOCALSTORE", "Cache-Control": "public, max-age=60" },
      });
    }

    // Record not found in MySQL or PHP fallback
    return NextResponse.json(
      { success: false, error: "Certificate not found" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Certificate verification error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while verifying certificate" },
      { status: 500 }
    );
  }
}
