"use client";
import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import { useEditState } from "sanity";

export default function PostList() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: "2024-05-03",
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  async function getPosts() {
    const posts = await client.fetch('*[_type == "post"]');
    return posts;
  }
}
