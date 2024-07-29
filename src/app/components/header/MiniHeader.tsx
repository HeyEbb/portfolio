// fonts
import { Outfit } from "next/font/google";
import TopBar from "../topbar/TopBar";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function MiniHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <header className="">
        <TopBar />
        <div className="core-structure mt-5 flex w-full flex-col items-start rounded-3xl bg-indigo-300 p-11 text-indigo-950 md:p-16 ">
          <h1>{title ? title : "Title"}</h1>
          <span className="text-lg font-light xl:text-lg">
            {subtitle ? subtitle : "Subtitle"}
          </span>
        </div>
      </header>
    </>
  );
}
