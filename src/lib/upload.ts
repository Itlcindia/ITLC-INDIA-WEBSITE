import path from "path";
import fs from "fs/promises";

/**
 * Utility to process an uploaded file.
 * Returns a Base64 Data URL for direct storage in the MySQL database (LONGTEXT).
 * This guarantees:
 * 1. Images render immediately in Next.js without 404 or broken image icons.
 * 2. Media persists in MySQL across Git pushes and Hostinger redeployments.
 * 3. Also attempts to write to public/uploads on disk for backward compatibility.
 */
export async function saveUploadedFile(
  file: File,
  subfolder: string = "general"
): Promise<string> {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name || "").toLowerCase() || ".jpg";
    const cleanBase = path
      .basename(file.name || "upload", ext)
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .slice(0, 40);
    const filename = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}_${cleanBase}${ext}`;

    // Attempt writing to disk for local file serving if possible
    try {
      const targetDir = path.join(process.cwd(), "public", "uploads", subfolder);
      await fs.mkdir(targetDir, { recursive: true });
      const targetPath = path.join(targetDir, filename);
      await fs.writeFile(targetPath, buffer);
    } catch (diskErr) {
      console.warn("Notice: Ephemeral filesystem detected, writing to disk skipped:", diskErr);
    }

    // Determine MIME type
    let mimeType = file.type;
    if (!mimeType || mimeType === "application/octet-stream") {
      if (ext === ".jpg" || ext === ".jpeg") mimeType = "image/jpeg";
      else if (ext === ".png") mimeType = "image/png";
      else if (ext === ".webp") mimeType = "image/webp";
      else if (ext === ".gif") mimeType = "image/gif";
      else if (ext === ".svg") mimeType = "image/svg+xml";
      else if (ext === ".pdf") mimeType = "application/pdf";
      else mimeType = "image/jpeg";
    }

    // Return Data URL for permanent MySQL persistence
    return `data:${mimeType};base64,${buffer.toString("base64")}`;
  } catch (error) {
    console.error("Failed to process uploaded file:", error);
    throw new Error("File upload failed on server");
  }
}
