import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  publish_date: { type: Date, required: true },
  author_name: { type: String, required: true },
  blog_image: { type: String, required: true },
  total_likes: { type: Number, default: 0 },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
