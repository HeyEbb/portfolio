// fonts
import { Outfit } from "next/font/google";
import TopBar from "../topbar/TopBar";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function MiniHeader() {
  return (
    <>
      <header>
        <TopBar />
        <div className="m-8 flex h-56 w-full flex-col justify-center rounded-3xl bg-indigo-300 p-14 font-sans text-indigo-950">
          <h1>All Posts</h1>
          <span className="text-lg font-light xl:text-lg">
            A collection of my thoughts, ideas, and experiences
          </span>
        </div>
      </header>
    </>
  );
}
