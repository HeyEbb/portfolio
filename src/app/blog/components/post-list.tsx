"use client";
import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import PostCard from "./post-card";

export default function PostList() {
  /* --------------------------------- state -------------------------------- */

  const [posts, setPosts] = useState([]);

  /* --------------------------------- effects -------------------------------- */

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  /* --------------------------- instantiate client --------------------------- */

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: "2024-05-03",
  });

  /* --------------------------------- methods -------------------------------- */

  async function getPosts() {
    const posts = await client.fetch(`
      *[_type == "post"] {
      title,
      "mainImage" : mainImage.asset->{url},
      "excerpt": array::join(string::split((pt::text(body)), "")[0..50], "") + "...",
      body,
      slug
}`);
    return posts;
  }

  /* --------------------------------- markup -------------------------------- */

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </section>
  );
}
