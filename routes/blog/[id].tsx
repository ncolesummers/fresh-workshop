import { Post } from "../../utils/posts.ts";

const post: Post = {
  id: "hello",
  title: "Hello World",
  publishAt: new Date(),
  snippet: "This is my first post",
  content: "Hello Universe!",
}

export default function BlogPostPage() {
  return (
    <div class="px-4 mx-auto max-w-screen-md">
      <p class="text-gray-600 mt-12">{post.publishAt.toLocaleDateString()}</p>
      <h1 class="text-5xl mt-2 font-bold">{post.title}</h1>
      <div class="mt-12">{post.content}</div>
    </div>
  )
}