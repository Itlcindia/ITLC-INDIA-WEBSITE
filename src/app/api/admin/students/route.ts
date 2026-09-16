import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { localStore } from "@/lib/local-store";

/**
 * GET /api/admin/students
 * List all student admission applications with search, status filter, and CSV export.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";
  const status = searchParams.get("status")?.trim() || "";
  const isExport = searchParams.get("export") === "csv";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "50", 10);
  const skip = (page - 1) * limit;

  // Try DB with fast 500ms timeout
  try {
    const where: any = {};

    if (q) {
      where.OR = [
        { applicationNumber: { contains: q } },
        { fullName: { contains: q } },
        { email: { contains: q } },
        { mobileNumber: { contains: q } },
        { collegeName: { contains: q } },
        { courseApplied: { contains: q } },
      ];
    }

    if (status && status !== "ALL") {
      where.status = status;
    }

    // CSV Export handler
    if (isExport) {
      const allStudents = await prisma.studentRegistration.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      const csvRows = [
        [
          "Application Number",
          "Full Name",
          "Father Name",
          "Email",
          "Mobile Number",
          "WhatsApp",
          "Date of Birth",
          "Gender",
          "College",
          "Course Applied",
          "Qualification",
          "Year/Sem",
          "Status",
          "City",
          "State",
          "Applied Date",
        ].join(","),
      ];

      for (const s of allStudents) {
        const row = [
          `"${s.applicationNumber}"`,
          `"${s.fullName.replace(/"/g, '""')}"`,
          `"${s.fatherName.replace(/"/g, '""')}"`,
          `"${s.email}"`,
          `"${s.mobileNumber}"`,
          `"${s.whatsappNumber || ""}"`,
          `"${s.dob}"`,
          `"${s.gender}"`,
          `"${s.collegeName.replace(/"/g, '""')}"`,
          `"${s.courseApplied.replace(/"/g, '""')}"`,
          `"${s.qualification.replace(/"/g, '""')}"`,
          `"${s.yearSemester}"`,
          `"${s.status}"`,
          `"${s.city}"`,
          `"${s.state}"`,
          `"${s.createdAt.toISOString().split("T")[0]}"`,
        ];
        csvRows.push(row.join(","));
      }

      return new Response(csvRows.join("\n"), {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="student_admissions_${Date.now()}.csv"`,
        },
      });
    }

    const dbPromise = Promise.all([
      prisma.studentRegistration.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.studentRegistration.count({ where }),
    ]);

    const timeoutPromise = new Promise<null>((_, reject) =>
      setTimeout(() => reject(new Error("DB_TIMEOUT")), 500)
    );

    const result = await Promise.race([dbPromise, timeoutPromise]);
    if (result) {
      const [students, total] = result;
      return NextResponse.json({
        success: true,
        students,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    }
  } catch {
    // Database offline or timed out - seamlessly serve from localStore
  }

  // Instant Fallback from localStore
  const localStudents = localStore.getStudents(q, status);

  if (isExport) {
    const csvRows = [
      [
        "Application Number",
        "Full Name",
        "Father Name",
        "Email",
        "Mobile Number",
        "WhatsApp",
        "Date of Birth",
        "Gender",
        "College",
        "Course Applied",
        "Qualification",
        "Year/Sem",
        "Status",
        "City",
        "State",
        "Applied Date",
      ].join(","),
    ];

    for (const s of localStudents) {
      const row = [
        `"${s.applicationNumber}"`,
        `"${s.fullName.replace(/"/g, '""')}"`,
        `"${s.fatherName.replace(/"/g, '""')}"`,
        `"${s.email}"`,
        `"${s.mobileNumber}"`,
        `"${s.whatsappNumber || ""}"`,
        `"${s.dob}"`,
        `"${s.gender}"`,
        `"${s.collegeName.replace(/"/g, '""')}"`,
        `"${s.courseApplied.replace(/"/g, '""')}"`,
        `"${s.qualification.replace(/"/g, '""')}"`,
        `"${s.yearSemester}"`,
        `"${s.status}"`,
        `"${s.city}"`,
        `"${s.state}"`,
        `"${s.createdAt.split("T")[0]}"`,
      ];
      csvRows.push(row.join(","));
    }

    return new Response(csvRows.join("\n"), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="student_admissions_${Date.now()}.csv"`,
      },
    });
  }

  const paginated = localStudents.slice(skip, skip + limit);
  return NextResponse.json({
    success: true,
    students: paginated,
    pagination: {
      total: localStudents.length,
      page,
      limit,
      totalPages: Math.ceil(localStudents.length / limit) || 1,
    },
  });
}
