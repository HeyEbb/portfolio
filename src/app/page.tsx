import { Outfit } from "next/font/google";
import Image from "next/image";
import Header from "./components/header/header";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function Page() {
  return (
    <>
      <main className="h-screen">
        <Header />
        {/* title hero */}
        <div
          className=" md:h-full 2xl:h-3/5 flex justify-center "
          style={{
            // gives the yellow background a slanted edge
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% calc(100% - 10vw))",
            backgroundImage: "url('/static/img/yellow_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* left of landing hero */}
          <div className="flex flex-row items-center flex-col lg:flex-row w-full max-w-screen-xl">
            <div className="w-full">
              <h1 className={`${outfit.className} text-5xl sm:text-6xl md:text-8xl text-neutral-800`}>
                Ellis Collinson
              </h1>
              <h2
                className={`${outfit.className} font-sans text-3xl lg:5xl text-neutral-700`}>
                My snazzy portfolio
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptas, voluptatum, quibusdam, quos voluptate dolorum
                asperiores atque quae autem fugiat doloremque? Quisquam
                voluptas, voluptatum, quibusdam, quos voluptate dolorum
                asperiores atque quae autem fugiat doloremque?
              </p>
            </div>

          {/* right side of landing hero */}
          <div className="w-full flex justify-center">
            <Image
              src="/static/img/cathedral.png"
              alt="cathedral"
              width="500"
              height="500"
            />
          </div>
        </div>
        </div>
      </main>
    </>
  );
}
