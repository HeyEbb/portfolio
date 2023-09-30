import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function Page() {
  return (
    <>
      <main>
        {/* title hero */}
        <div
          className=" md:h-full 2xl:h-2/3 absolute top-0 left-0 right-0 flex justify-center "
          style={{
            // gives the yellow background a slanted edge
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% calc(100% - 15vw))",
            backgroundImage: "url('/static/img/yellow_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* left of landing hero */}
          <div className="flex flex-row items-center flex-col lg:flex-row p-10 md:p-20">
            <div className="w-full">
              <h1 className={`${outfit.className} text-5xl sm:text-6xl md:text-8xl  text-neutral-800`}>
                Ellis Collinson
              </h1>
              <h2
                className={`${outfit.className} font-sans text-3xl lg:5xl text-neutral-700`}>
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
      </main>
    </>
  );
}
