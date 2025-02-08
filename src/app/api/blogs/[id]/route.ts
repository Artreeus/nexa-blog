import Blog from "@/lib/Blog";
import connectMongo from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (request : Request,  { params }: { params: { id: string } }) => {
  await connectMongo();

  const { id } = params;

  if (!id) {
    return new NextResponse(
      JSON.stringify({ error: "Blog ID is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return new NextResponse(
        JSON.stringify({ error: "Blog not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Invalid blog ID" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
};
