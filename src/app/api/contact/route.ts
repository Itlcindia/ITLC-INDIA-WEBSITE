import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwXSIqNpsSWn3ugl71vPKo7VQq-0Q4EvjK8xn2jpPnUcG5f8HkJWmnFmvwqIdNl1yR7/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 1. Save to Prisma MySQL database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name: name.trim(),
        company: company?.trim() || null,
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        service: service?.trim() || "General Inquiry",
        message: message.trim(),
        status: "NEW",
      },
    });

    // 2. Non-blocking background forward to Google Apps Script (as backup)
    try {
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).catch((e) => console.warn("Google Script forward failed:", e));
    } catch {
      // ignore
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received. Our team will contact you shortly.",
      inquiryId: inquiry.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit inquiry. Please try again." },
      { status: 500 }
    );
  }
}
