'use server'

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  // Convert FormData to a plain object
  const blogData = Object.fromEntries(data.entries());

  // Generate a numeric ID for the blog (you can use any strategy for generating a numeric ID)
  // For example, using the current timestamp or random number
  const generatedId = Date.now(); // Or Math.floor(Math.random() * 1000000000)

  // Assign the generated numeric ID to the blog data
  blogData.id = generatedId.toString(); // Ensure it's a string (if your backend requires a string)

  // Send the request to the backend with the new numeric ID
  const res = await fetch('http://localhost:5000/blogs', {
    method: 'POST',
    body: JSON.stringify(blogData),
    headers: {
      'Content-type': 'application/json',
    },
  });

  // Parse the response from the server
  const blogInfo = await res.json();

  // Redirect after successful creation
  if (blogInfo.id) {
    redirect(`/blogs/${blogInfo.id}`);
  }

  return blogInfo;
};
