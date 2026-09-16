import path from "path";
import fs from "fs/promises";

/**
 * Utility to save an uploaded file (from FormData) into the public/uploads directory.
 * @param file The File object from request.formData()
 * @param subfolder Subfolder inside public/uploads (e.g., 'certificates', 'students')
 * @returns Public URL path string (e.g., '/uploads/certificates/1234_cert.pdf')
 */
export async function saveUploadedFile(
  file: File,
  subfolder: string = "general"
): Promise<string> {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name) || ".bin";
    const cleanBase = path
      .basename(file.name, ext)
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .slice(0, 40);
    const filename = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}_${cleanBase}${ext}`;

    const targetDir = path.join(process.cwd(), "public", "uploads", subfolder);
    await fs.mkdir(targetDir, { recursive: true });

    const targetPath = path.join(targetDir, filename);
    await fs.writeFile(targetPath, buffer);

    return `/uploads/${subfolder}/${filename}`;
  } catch (error) {
    console.error("Failed to save uploaded file:", error);
    throw new Error("File upload failed on server");
  }
}
