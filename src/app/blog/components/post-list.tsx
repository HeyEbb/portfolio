"use client";
import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import PostCard from "./post-card";

export default function PostList() {
  /* -------------------------------- interface ------------------------------- */
  interface Post {
    _id: string;
    title: string;
    mainImage: {
      url: string;
      alt?: string; // Optional alt property for images
    };
    excerpt: string;
    body: any; // Consider specifying a more precise type if possible
    slug: {
      current: string;
    };
    publishedAt: string; // Add this line to include the missing property
  }

  /* --------------------------------- state -------------------------------- */

  const [posts, setPosts] = useState<Post[]>([]);

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
        _id,
        title,
        "mainImage": mainImage.asset->{url, alt},
        "excerpt": array::join(string::split((pt::text(body)), "")[0..50], "") + "...",
        body,
        slug,
        publishedAt // Ensure this property is fetched
    }`);
    return posts;
  }

  /* --------------------------------- markup -------------------------------- */

  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </section>
  );
}
