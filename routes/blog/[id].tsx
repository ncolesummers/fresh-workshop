import { loadPost, Post } from "../../utils/posts.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "https://deno.land/x/gfm@0.1.26/mod.ts";

export const handler: Handlers<Post> = {
  async GET(req, ctx) {
    const id = ctx.params.id;
    const post = await loadPost(id);
    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
    return ctx.render(post);
  },
};

export default function BlogPostPage(props: PageProps) {
  const post = props.data;
  const dateFmt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    });
  const html = render(post.content);

  return (
    <div class="px-4 mx-auto max-w-screen-md">
      <p class="text-gray-600 mt-12">{dateFmt.format(post.publishAt)}</p>
      <h1 class="text-5xl mt-2 font-bold">{post.title}</h1>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="mt-12 markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      >
      </div>
    </div>
  );
}
