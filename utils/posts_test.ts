import { loadPost } from "./posts.ts";

import { assert, assertEquals } from "$std/testing/asserts.ts";

Deno.test("load post", async () => {
  const post = await loadPost("hello");
  console.log(post);
  assert(post);
  assertEquals(post.id, "hello");
});

Deno.test("load non-existant post", async () => {
  const post = await loadPost("this post does not exist");
  console.log(post);
  assertEquals(post, null);
});