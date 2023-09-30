import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
    subsets: ["latin-ext"],
})

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen">
        {/* title hero */}
        <div className="bg-yellow-400 h-3/4 absolute top-0 left-0 right-0 flex justify-center items-center px-64">
          {/* left of landing hero */}
          <div className="bg-red-500 w-full">
            <h1 className={`${outfit.className} text-7xl`}>Generic Portfolio Title</h1>
            <h2 className="font-sans text-6xl">Something catchy</h2>
          </div>
          {/* right side of landing hero */}
          <div className="bg-blue-500 w-full flex justify-center items-center">
            <Image src="/static/img/cathedral.png" alt="cathedral" width="500" height="500" />
          </div>
        </div>
        <div className="flex h-full items-center justify-center"></div>
      </main>
    </>
  );
}
