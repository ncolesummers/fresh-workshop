import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts"
import { listPosts, Post } from "../utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render(posts);
  }
}
export default function Home(props: PageProps<Post[]>) {
  const posts = props.data
  return (
    <>
      <Head>
        <title>Nate's Blog</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-5xl mt-12 font-bold">Nate's Blog</h1>
        <ul class="mt-8">
          {posts.map((post) => <PostEntry post={post} />)}
        </ul>
      </div>
    </>
  );
}

function PostEntry(props: { post: Post }) {
  const { post } = props;
  return (
    <li class="border-t ">
      <a href={`/blog/${post.id}`} class="py-2 flex gap-4 group">
        <div>{post.publishAt.toLocaleDateString()}</div>
        <div>
          <h2 class="font-bold text-xl group-hover:underline">{post.title}</h2>
          <p class="text-gray-600">{post.snippet}</p>
        </div>
      </a>
    </li>
  )
}
