import { NextResponse } from "next/server";
import { StorageService } from "@/lib/appwrite/storage";
import { DatabaseService } from "@/lib/appwrite/database";
import { appwriteConfig } from "@/lib/appwrite/config";

export async function GET(
  request: Request,
  { params }: { params: { fileId: string } }
) {
  try {
    const { fileId } = params;

    // Get resource metadata from database
    const resource = await DatabaseService.getResourceByFileId(fileId);
    if (!resource) {
      return NextResponse.json(
        { error: "Resource not found" },
        { status: 404 }
      );
    }

    // Get the actual file buffer from storage
    const client = await StorageService.getClient();
    const fileBuffer = await client.storage.getFileView(
      appwriteConfig.buckets.resources,
      fileId
    );

    // Ensure proper filename with extension
    let filename = resource.name;
    if (!filename.includes('.')) {
      // Try to get extension from mimeType if filename doesn't have one
      const mimeParts = resource.mimeType?.split('/');
      if (mimeParts && mimeParts.length > 1) {
        filename = `${filename}.${mimeParts[1]}`;
      }
    }

    // Create response with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': resource.mimeType || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(filename)}"`,
        'Content-Length': resource.size.toString(),
      },
    });

  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}