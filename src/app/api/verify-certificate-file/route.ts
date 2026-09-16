import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { localStore } from "@/lib/local-store";

/**
 * @fileOverview Secure certificate file access validation (100% Local-First).
 * Validates date of birth matching before revealing/downloading the certificate file.
 */
function normalizeDob(dobStr?: string | null): string {
  if (!dobStr) return "";
  return dobStr.replace(/[^a-zA-Z0-9]/g, "").trim().toLowerCase();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawCert = body.certificate_number || body.certificate;
    const certNum = rawCert ? String(rawCert).trim().toUpperCase() : "";
    const inputDob = body.date_of_birth || body.dob || "";

    if (!certNum) {
      return NextResponse.json(
        { success: false, error: "Certificate number is required" },
        { status: 400 }
      );
    }

    // 1. Look up in Prisma MySQL (if available)
    try {
      const certRecord = await prisma.certificate.findUnique({
        where: { certificateNumber: certNum },
      });

      if (certRecord) {
        if (certRecord.dateOfBirth) {
          const storedNorm = normalizeDob(certRecord.dateOfBirth);
          const inputNorm = normalizeDob(inputDob);
          const isDateMatch =
            storedNorm === inputNorm ||
            (certRecord.dateOfBirth && inputDob && new Date(certRecord.dateOfBirth).getTime() === new Date(inputDob).getTime());

          if (!isDateMatch) {
            return NextResponse.json(
              { success: false, error: "Date of birth does not match our records." },
              { status: 403 }
            );
          }
        }

        const fileUrl = certRecord.certificateFileUrl || "/sample-certificate.pdf";
        return NextResponse.json({
          success: true,
          certificate_file_url: fileUrl,
          file_url: fileUrl,
          certificate_number: certRecord.certificateNumber,
          student_name: certRecord.studentName,
        });
      }
    } catch {
      // Prisma offline, continue to localStore
    }

    // 2. Fallback to localStore for 100% Offline & Local Verification
    const localCert = localStore.getCertificates().find(
      c => c.certificateNumber.toUpperCase() === certNum || c.verificationId.toUpperCase() === certNum
    );

    if (localCert) {
      if (localCert.dateOfBirth) {
        const storedNorm = normalizeDob(localCert.dateOfBirth);
        const inputNorm = normalizeDob(inputDob);
        const isDateMatch =
          storedNorm === inputNorm ||
          (localCert.dateOfBirth && inputDob && new Date(localCert.dateOfBirth).getTime() === new Date(inputDob).getTime());

        if (!isDateMatch) {
          return NextResponse.json(
            { success: false, error: "Date of birth does not match our records." },
            { status: 403 }
          );
        }
      }

      const fileUrl = localCert.certificateFileUrl || "/sample-certificate.pdf";
      return NextResponse.json({
        success: true,
        certificate_file_url: fileUrl,
        file_url: fileUrl,
        certificate_number: localCert.certificateNumber,
        student_name: localCert.studentName,
      });
    }

    return NextResponse.json(
      { success: false, error: "Certificate record not found." },
      { status: 404 }
    );
  } catch (error) {
    console.error("Verify certificate file error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process certificate download verification" },
      { status: 500 }
    );
  }
}
