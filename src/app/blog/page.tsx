import MiniHeader from "../components/header/MiniHeader";
import PostList from "./components/post-list";

export default function Blog() {
  return (
    <>
        <MiniHeader />
      <main className="custom-structure mt-10">
        <PostList />
      </main>
    </>
  );
}
