import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/**
 * GET /api/admin/students/[id]
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const student = await prisma.studentRegistration.findUnique({
      where: { id },
    });

    if (!student) {
      return NextResponse.json(
        { success: false, error: "Student application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, student });
  } catch (error) {
    console.error("Admin student detail error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch student details" },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/admin/students/[id]
 * Updates student status (PENDING, APPROVED, REJECTED) and internal admin notes.
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updateData: any = {};
    if (body.status) {
      updateData.status = body.status;
    }
    if (body.notes !== undefined) {
      updateData.notes = body.notes;
    }

    const updated = await prisma.studentRegistration.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      message: `Student application marked as ${updated.status}`,
      student: updated,
    });
  } catch (error: any) {
    console.error("Admin student status update error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update student application" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/students/[id]
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.studentRegistration.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Student application deleted successfully",
    });
  } catch (error) {
    console.error("Admin student delete error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete student application" },
      { status: 500 }
    );
  }
}
