import MiniHeader from "../components/header/MiniHeader";
import PostList from "./components/post-list";

export default function Blog() {
  return (
    <>
      <MiniHeader
        title="All Posts"
        subtitle="A collection of my thoughts, ideas, and experiences"
      />
      {/* <PostList /> */}
      <section>
        <div className="core-structure mt-5  grid min-h-[600px] w-full grid-cols-1 justify-center gap-3 text-indigo-950 lg:grid-cols-3 xl:flex-row xl:gap-5">
          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200"></div>
          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200"></div>
          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200"></div>
          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200"></div>
          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200"></div>
          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200"></div>
          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200"></div>
          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200"></div>
        </div>
      </section>
    </>
  );
}
