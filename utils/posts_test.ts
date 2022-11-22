import { listPosts, loadPost } from "./posts.ts";

import { assert, assertEquals } from "$std/testing/asserts.ts";

Deno.test("load post", async () => {
  const post = await loadPost("hello");
  assert(post);
  assertEquals(post.id, "hello");
});

Deno.test("load non-existant post", async () => {
  const post = await loadPost("this post does not exist");
  assertEquals(post, null);
});

Deno.test("list posts", async () => {
  const posts = await listPosts();
  assert(posts.length >= 1);
  const last = posts.at(-1);
  assert(last);
  assertEquals(last.id, "hello");
});
