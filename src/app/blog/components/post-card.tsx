export default function PostCard({
  post,
}: {
  post: {
    title: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
  };
}) {
  return (
    <article className="mb-10"> 
    <img src={post.mainImage.asset._ref} alt={post.mainImage.alt} />
      <h2 className="text-3xl font-bold">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h2>
      <p className="text-sm text-gray-500">{post.publishedAt}</p>
      <p className="mt-2">{post.excerpt}</p>
    </article>
  );
}

