import { ConnectDB } from "@/lib/config/db";
const { NextResponse } = require("next/server");
import BlogModel from "@/lib/models/BlogModel";
import { v2 as cloudinary } from "cloudinary";

const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API endpoint to get all blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// API endpoint for uploading blogs
export async function POST(request) {
  await ConnectDB();

  try {
    const formData = await request.formData();
    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary using a promise
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "blogs" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(buffer);
    });

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
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

// API endpoint for deleting blogs
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);

  // Delete image from Cloudinary if it exists
  if (blog && blog.image) {
    // Extract public_id from Cloudinary URL
    const publicId = blog.image.split("/").pop().split(".")[0]; // simple extraction, adjust if needed
    try {
      await cloudinary.uploader.destroy(`blogs/${publicId}`);
    } catch (err) {
      console.error("Cloudinary deletion failed:", err);
    }
  }

  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
