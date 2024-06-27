// fonts
import { Outfit } from "next/font/google";
import TopBar from "../topbar/TopBar";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function MiniHeader() {
  return (
    <>
      <header className="fixed z-40">
        <TopBar />
      </header>
      <section
        style={{
          backgroundImage: "url('/static/img/yellow_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* header hero container */}
        <div className="custom-structure h-80">
          {/* left side */}
          <div className={`text-center lg:text-left xl:w-7/12`}>
            <h1 className={`${outfit.className}`}>{`Blogs`}</h1>
            <span className="text-lg font-light xl:text-lg">
              {`A collection of my thoughts, ideas, and experiences`}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
