export default function PostCard({
  post,
}: {
  post: {
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    mainImage: {
      url: string;
      alt?: string; // Optional, add if you plan to use alt text for the image
    };
  };
}) {
  console.log(post);
  return (
    <article
      className="mb-10 h-64 rounded-md bg-gray-200 p-3 flex justify-between flex-column"
      style={{
        backgroundImage: `url(${post.mainImage.url})`,
        backgroundSize: "cover",
      }}
    >
      <span>
        <span className="text-sm text-gray-500">Blog</span>
        <h2 className="text-3xl font-bold text-white">
          <a href={`/blog/${post.slug.current}`}>{post.title}</a>
        </h2>
      </span>
      <button className="text-left">
        <a href={`/blog/${post.slug.current}`}>Read More</a>
      </button>
    </article>
  );
}