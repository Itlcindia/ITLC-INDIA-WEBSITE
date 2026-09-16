import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";
import { localStore } from "@/lib/local-store";

/**
 * @fileOverview Student Registration submission endpoint (100% Local-First).
 * Saves application data and uploaded documents locally and to Prisma MySQL if available.
 * POST /api/student-registration
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract textual fields
    const fullName = String(formData.get("student_name") || formData.get("fullName") || "").trim();
    const fatherName = String(formData.get("father_name") || formData.get("fatherName") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const mobileNumber = String(formData.get("mobile_number") || formData.get("mobileNumber") || "").trim();
    const whatsappNumber = String(formData.get("whatsapp_number") || formData.get("whatsappNumber") || "").trim();
    const dob = String(formData.get("date_of_birth") || formData.get("dob") || "").trim();
    const gender = String(formData.get("gender") || "").trim();
    const collegeName = String(formData.get("college_name") || formData.get("collegeName") || "").trim();
    const courseApplied = String(formData.get("course_applied") || formData.get("courseApplied") || "").trim();
    const qualification = String(formData.get("qualification") || "").trim();
    const yearSemester = String(formData.get("year_semester") || formData.get("yearSemester") || "").trim();
    const address = String(formData.get("address") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const state = String(formData.get("state") || "").trim();
    const pincode = String(formData.get("pincode") || "").trim();

    if (!fullName || !email || !mobileNumber) {
      return NextResponse.json(
        { success: false, message: "Full name, email, and mobile number are required." },
        { status: 400 }
      );
    }

    // Process uploaded documents locally to /public/uploads
    let passportPhotoUrl = "";
    let resumeUrl = "";
    let aadhaarCardUrl = "";
    let collegeIdCardUrl = "";

    const photoFile = formData.get("passport_photo") || formData.get("passportPhoto");
    if (photoFile instanceof File && photoFile.size > 0) {
      passportPhotoUrl = await saveUploadedFile(photoFile, "students/photos");
    }

    const resumeFile = formData.get("resume");
    if (resumeFile instanceof File && resumeFile.size > 0) {
      resumeUrl = await saveUploadedFile(resumeFile, "students/resumes");
    }

    const aadhaarFile = formData.get("aadhaar_card") || formData.get("aadhaarCard");
    if (aadhaarFile instanceof File && aadhaarFile.size > 0) {
      aadhaarCardUrl = await saveUploadedFile(aadhaarFile, "students/aadhaar");
    }

    const collegeIdFile = formData.get("college_id_card") || formData.get("collegeIdCard");
    if (collegeIdFile instanceof File && collegeIdFile.size > 0) {
      collegeIdCardUrl = await saveUploadedFile(collegeIdFile, "students/college_id");
    }

    // Generate unique application number
    const currentYear = new Date().getFullYear();
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    const applicationNumber = `ITLC-${currentYear}-${randomDigits}`;

    // Always persist to localStore for instant local admin visibility
    const localStudent = localStore.addStudent({
      applicationNumber,
      fullName,
      fatherName: fatherName || "N/A",
      email,
      mobileNumber,
      whatsappNumber: whatsappNumber || mobileNumber,
      dob: dob || "N/A",
      gender: gender || "N/A",
      collegeName: collegeName || "N/A",
      courseApplied: courseApplied || "General",
      qualification: qualification || "N/A",
      yearSemester: yearSemester || "N/A",
      address: address || "N/A",
      city: city || "N/A",
      state: state || "N/A",
      pincode: pincode || "000000",
      passportPhotoUrl: passportPhotoUrl || undefined,
      resumeUrl: resumeUrl || undefined,
      aadhaarCardUrl: aadhaarCardUrl || undefined,
      collegeIdCardUrl: collegeIdCardUrl || undefined,
      status: "PENDING",
    });

    // Optionally save to Prisma MySQL if running
    try {
      await prisma.studentRegistration.create({
        data: {
          applicationNumber,
          fullName,
          fatherName: fatherName || "N/A",
          email,
          mobileNumber,
          whatsappNumber: whatsappNumber || mobileNumber,
          dob: dob || "N/A",
          gender: gender || "N/A",
          collegeName: collegeName || "N/A",
          courseApplied: courseApplied || "General",
          qualification: qualification || "N/A",
          yearSemester: yearSemester || "N/A",
          address: address || "N/A",
          city: city || "N/A",
          state: state || "N/A",
          pincode: pincode || "000000",
          passportPhotoUrl: passportPhotoUrl || null,
          resumeUrl: resumeUrl || null,
          aadhaarCardUrl: aadhaarCardUrl || null,
          collegeIdCardUrl: collegeIdCardUrl || null,
          status: "PENDING",
        },
      });
    } catch {
      // Prisma offline, localStore is already persisted
    }

    return NextResponse.json({
      success: true,
      application_id: applicationNumber,
      message: "Application submitted successfully! Your application ID is " + applicationNumber,
      data: {
        id: localStudent.id,
        applicationNumber,
      },
    });
  } catch (error) {
    console.error("Student registration error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit student registration. Please try again.",
      },
      { status: 500 }
    );
  }
}
