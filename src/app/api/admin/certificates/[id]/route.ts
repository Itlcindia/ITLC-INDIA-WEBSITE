import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cacheDelete } from "@/lib/redis";
import { saveUploadedFile } from "@/lib/upload";

/**
 * GET /api/admin/certificates/[id]
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const certificate = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      return NextResponse.json(
        { success: false, error: "Certificate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, certificate });
  } catch (error) {
    console.error("Admin certificate detail error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch certificate" },
      { status: 500 }
    );
  }
}

/**
 * PUT/PATCH /api/admin/certificates/[id]
 * Updates certificate fields or toggles status (VERIFIED <-> REVOKED).
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const contentType = request.headers.get("content-type") || "";

    let updateData: any = {};
    let certificateFileUrl: string | undefined = undefined;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      if (formData.has("studentName")) updateData.studentName = String(formData.get("studentName")).trim();
      if (formData.has("courseName")) updateData.courseName = String(formData.get("courseName")).trim();
      if (formData.has("startDate")) updateData.startDate = String(formData.get("startDate")).trim() || null;
      if (formData.has("completionDate")) updateData.completionDate = String(formData.get("completionDate")).trim() || null;
      if (formData.has("issueDate")) updateData.issueDate = String(formData.get("issueDate")).trim() || null;
      if (formData.has("expiryDate")) updateData.expiryDate = String(formData.get("expiryDate")).trim() || null;
      if (formData.has("dateOfBirth")) updateData.dateOfBirth = String(formData.get("dateOfBirth")).trim() || null;
      if (formData.has("status")) updateData.status = String(formData.get("status")).trim().toUpperCase();
      if (formData.has("revokedReason")) updateData.revokedReason = String(formData.get("revokedReason")).trim() || null;

      const file = formData.get("certificateFile");
      if (file instanceof File && file.size > 0) {
        certificateFileUrl = await saveUploadedFile(file, "certificates");
        updateData.certificateFileUrl = certificateFileUrl;
      }
    } else {
      updateData = await request.json();
    }

    const currentCert = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!currentCert) {
      return NextResponse.json(
        { success: false, error: "Certificate not found" },
        { status: 404 }
      );
    }

    const updated = await prisma.certificate.update({
      where: { id },
      data: updateData,
    });

    // Invalidate Redis cache
    await cacheDelete(`cert:${currentCert.certificateNumber}`);

    return NextResponse.json({
      success: true,
      message: "Certificate updated successfully",
      certificate: updated,
    });
  } catch (error: any) {
    console.error("Admin certificate update error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update certificate" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/certificates/[id]
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const cert = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!cert) {
      return NextResponse.json(
        { success: false, error: "Certificate not found" },
        { status: 404 }
      );
    }

    await prisma.certificate.delete({
      where: { id },
    });

    // Invalidate Redis cache
    await cacheDelete(`cert:${cert.certificateNumber}`);

    return NextResponse.json({
      success: true,
      message: "Certificate deleted successfully",
    });
  } catch (error) {
    console.error("Admin delete certificate error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete certificate" },
      { status: 500 }
    );
  }
}
