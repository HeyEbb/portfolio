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

  /* --------------------------------- methods -------------------------------- */

  async function getPosts() {
    const posts = await client.fetch('*[_type == "post"]');
    return posts;
  }

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: "2024-05-03",
  });

  /* --------------------------------- markup -------------------------------- */

  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </section>
  );
}
