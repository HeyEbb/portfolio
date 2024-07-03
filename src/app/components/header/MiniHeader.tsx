// fonts
import { Outfit } from "next/font/google";
import TopBar from "../topbar/TopBar";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function MiniHeader() {
  return (
    <>
      {/* <header className="fixed z-40">
        <TopBar />
      </header> */}
      <section className="">
          
        <div className="bg-indigo-300 text-indigo-950 m-10 h-56 rounded-3xl font-sans flex flex-col justify-center p-14">
          <h1>All Posts</h1>
          <span className="text-lg font-light xl:text-lg">
            A collection of my thoughts, ideas, and experiences
          </span>
        </div>

      </section>

      {/* header hero container */}
      {/* <div className="custom-structure bg-indigo-400 text-white h-80"> */}
      {/* left side */}
      {/* <div className={`text-left xl:w-7/12`}>
            <h1 className={`${outfit.className}`}>{`Blogs`}</h1>
            <span className="text-lg font-light xl:text-lg">
              {`A collection of my thoughts, ideas, and experiences`}
            </span>
          </div> */}
      {/* </div> */}
    </>
  );
}
