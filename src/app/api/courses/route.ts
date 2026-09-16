import { NextResponse } from "next/server";

/**
 * Local Courses API Route
 * Returns standard ITLC industry-aligned training courses in 0ms without remote dependency.
 */
const localCourses = [
  { id: "1", course_name: "Full Stack Web Development (MERN / Next.js)" },
  { id: "2", course_name: "Python Data Science & Machine Learning" },
  { id: "3", course_name: "Generative AI & LLM Engineering" },
  { id: "4", course_name: "Cyber Security & Ethical Hacking" },
  { id: "5", course_name: "Cloud Computing & DevOps (AWS / Azure)" },
  { id: "6", course_name: "UI/UX Product Design & Figma" },
  { id: "7", course_name: "Enterprise Java & Spring Boot" },
  { id: "8", course_name: "Mobile App Development (Flutter / React Native)" },
  { id: "9", course_name: "Digital Marketing & Performance Growth" },
  { id: "10", course_name: "HR Management & Corporate AI Training" },
];

export async function GET() {
  return NextResponse.json(localCourses, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
