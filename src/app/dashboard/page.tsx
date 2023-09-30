import { Outfit } from "next/font/google";
import Image from "next/image";
import styles from "./dashboard.css";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function Page() {
  return (
    <>
      <main className="flex">
        {/* title hero */}
        <div
          className=" md:h-full 2xl:h-2/3 absolute top-0 left-0 right-0 flex justify-center items-center px-36"
          style={{
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% calc(100% - 15vw))",
            backgroundImage: "url('/static/img/yellow_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* left of landing hero */}
          <div className="max-w-screen-xl flex items-center">
            <div className="w-full">
              <h1 className={`${outfit.className} text-8xl text-neutral-800`}>
                Ellis Collinson
              </h1>
              <h2
                className={`${outfit.className} font-sans text-5xl text-neutral-700`}
              >
                My snazzy portfolio
              </h2>
            </div>

          {/* right side of landing hero */}
          <div className="w-full ">
            <Image
              src="/static/img/cathedral.png"
              alt="cathedral"
              width="500"
              height="500"
            />
          </div>
        </div>
        </div>
        <div className="flex h-full items-center justify-center"></div>
      </main>
    </>
  );
}
