import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import BlogModel from '@/lib/models/BlogModel';
import { ConnectDB } from '@/lib/config/db';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  await ConnectDB();

  const formData = await request.formData();
  const file = formData.get("image");
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Upload to Cloudinary
  const uploadResponse = await cloudinary.uploader.upload_stream(
    { folder: "blogs" },
    async (error, result) => {
      if (error) {
        console.error(error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
      }

      const blogData = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        author: formData.get("author"),
        image: result.secure_url, // Cloudinary URL
        authorImg: formData.get("authorImg"),
      };

      await BlogModel.create(blogData);
      console.log("Blog saved with Cloudinary image");
      return NextResponse.json({ success: true, msg: "Blog Added" });
    }
  );

  uploadResponse.end(buffer);
}
