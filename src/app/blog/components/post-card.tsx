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
  console.log(post);
  return (
    <article className="mb-10 bg-gray-200 p-3">
      <img src={post.mainImage.url} alt={post.mainImage.alt} />
      <h2 className="mt-5 text-3xl font-bold">
        <a href={`/blog/${post.slug.current}`}>{post.title}</a>
      </h2>
      <p className="text-sm text-gray-500">{post.publishedAt}</p>
      <p className="mt-2">{post.excerpt}</p>
    </article>
  );
}
