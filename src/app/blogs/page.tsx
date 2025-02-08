"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/apis/blog.slice";
import { Blog } from "@/types";
import BlogsLoading from "./loading";

const Blogspage = () => {
  const { data: blogs, isLoading, isError } = useGetBlogsQuery({});
  
  if (isLoading) {
    return (
      <div className="w-[90%] mx-auto text-center">
       <div className="flex items-center justify-center min-h-screen">
      <div className="w-14 h-14 border-8 border-teal-600 border-dotted rounded-full animate-spin"></div>
    </div>
      </div>
    );
  }

  if (isError || !blogs) {
    return (
      <div className="w-[90%] mx-auto text-center">
        <p>Failed to load blogs. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Latest Blogs From <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power awaits.
        </i>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogspage;
