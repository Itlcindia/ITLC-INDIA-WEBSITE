import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updateData: any = {};
    if (body.status) updateData.status = body.status;
    if (body.notes !== undefined) updateData.notes = body.notes;

    const updated = await prisma.contactInquiry.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry updated successfully",
      contact: updated,
    });
  } catch (error: any) {
    console.error("Admin contact update error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update inquiry" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.contactInquiry.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry deleted successfully",
    });
  } catch (error) {
    console.error("Admin contact delete error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete inquiry" },
      { status: 500 }
    );
  }
}
