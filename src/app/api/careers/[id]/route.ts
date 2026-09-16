import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { localStore } from "@/lib/local-store";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Update in localStore immediately
    const updatedLocal = localStore.updateJob(id, body);

    // Try updating Prisma if online
    try {
      await prisma.job.update({
        where: { id },
        data: body,
      });
    } catch {
      // Prisma optional fallback
    }

    if (!updatedLocal) {
      return NextResponse.json(
        { success: false, error: "Job opening not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Job opening updated successfully",
      job: updatedLocal,
    });
  } catch (error: any) {
    console.error("Update job error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update job" },
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

    // Delete from localStore immediately
    const deleted = localStore.deleteJob(id);

    // Try deleting from Prisma if online
    try {
      await prisma.job.delete({
        where: { id },
      });
    } catch {
      // Prisma optional fallback
    }

    return NextResponse.json({
      success: true,
      message: "Job opening deleted successfully",
      deleted,
    });
  } catch (error) {
    console.error("Delete job error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete job" },
      { status: 500 }
    );
  }
}

