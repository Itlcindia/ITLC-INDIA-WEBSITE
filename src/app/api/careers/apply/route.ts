import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";
import { localStore } from "@/lib/local-store";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzgfMxitiJOxOjipSJ5vzvKfsOyhYsz6DYW4BmRcCqK63Yj9D0Eo4_OTkAMTEZNvvOg/exec";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const phone = String(formData.get("phone") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!fullName || !email || !position) {
      return NextResponse.json(
        { success: false, error: "Name, email, and position are required." },
        { status: 400 }
      );
    }

    // Find corresponding job or fallback
    let jobTitle = position;
    let jobDept = "Engineering";
    let jobId = "job_general";

    try {
      const dbJob = await prisma.job.findFirst({
        where: {
          OR: [
            { title: { contains: position } },
            { id: position },
          ],
        },
      });
      if (dbJob) {
        jobId = dbJob.id;
        jobTitle = dbJob.title;
        jobDept = dbJob.department;
      }
    } catch {
      // Database query optional
    }

    // Save resume file locally
    let resumeUrl = "";
    const resumeFile = formData.get("resume");
    if (resumeFile instanceof File && resumeFile.size > 0) {
      try {
        resumeUrl = await saveUploadedFile(resumeFile, "careers/resumes");
      } catch (err) {
        console.warn("Resume local save error:", err);
      }
    } else {
      resumeUrl = String(formData.get("resumeUrl") || "").trim();
    }

    // Save to localStore (guarantees immediate visibility in Admin Panel at /admin/careers)
    const localApp = localStore.addApplication({
      jobId,
      fullName,
      email,
      phone: phone || "",
      message: message || "",
      resumeUrl: resumeUrl || "No resume uploaded",
      status: "NEW",
      notes: "Submitted via Careers application form",
      job: {
        title: jobTitle,
        department: jobDept,
      },
    });

    // Also persist to Prisma if database is online
    try {
      await prisma.jobApplication.create({
        data: {
          jobId,
          fullName,
          email,
          phone: phone || null,
          message: message || null,
          resumeUrl: resumeUrl || "No resume uploaded",
          status: "NEW",
        },
      });
    } catch {
      // Database optional fallback
    }

    // Optional background sync to existing Google App Script
    try {
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          fullName,
          email,
          phone,
          position,
          message,
        }),
      }).catch((e) => console.warn("Google Script forward failed:", e));
    } catch {
      // ignore
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our recruitment team will review your profile.",
      applicationId: localApp?.id || "submitted",
    });
  } catch (error) {
    console.error("Job application error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
