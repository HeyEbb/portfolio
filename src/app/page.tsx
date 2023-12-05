import { Outfit } from "next/font/google";
import Image from "next/image";
import Header from "./components/header/header";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function Page() {
  return (
    <>
      {/* background holder */}
      <section
        className="flex justify-center"
        style={{
          // gives the yellow background a slanted edge
          clipPath: "polygon(100% 0, 0 0, 0 100%, 100% calc(100% - 25vw))",
          backgroundImage: "url('/static/img/yellow_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* container */}
        <div className="container mx-5 md:mx-10 h-screen grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-3">
          <div className="bg-gray-500 absolute container h-12">Header</div>
          <div className=" col-span-3 flex justify-center flex-col py-16 lg:py-0">
            <h1>Portfolio Site</h1>
            <h2>Made by Ellis Collinson</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores
              atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum,
              quibusdam.
            </p>
          </div>
          <div className="col-span-2 flex justify-center flex-col items-center ">
            <Image
              src="/static/img/cathedral.png"
              alt="cathedral"
              width="450"
              height="450"
              className="h-full w-auto lg:h-auto "
            />
          </div>
        </div>
      </section>

      {/* second */}
      <section className="flex justify-center">
        <div className="container flex justify-center h-96 items-center p-10 sm:p-20 md:p-40 lg:p-60 flex-col">
          <h3> web design and development is my thing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores
            atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum,
            quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat
            doloremque? Quisquam voluptas, voluptatum, quibusdam, quos voluptate
            dolorum asperiores atque quae autem fugiat doloremque?
          </p>
        </div>
      </section>

      <section
        className="tw-bg-blue-500 w-full h-screen "
        style={{
          // gives the yellow background a slanted edge
          clipPath: "polygon(100% calc(25vw), 0 0, 0 100%, 100% 100%)",
          backgroundColor: "#EDEDED",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Hii
      </section>

      <main className="h-screen">
        <Header />
        {/* title hero */}
        <section
          className="md:h-full 2xl:h-3/5 flex justify-center "
          style={{
            // gives the yellow background a slanted edge
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% calc(100% - 10vw))",
            backgroundImage: "url('/static/img/yellow_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* left of landing hero */}
          <div className="flex flex-row items-center flex-col lg:flex-row w-full max-w-screen-xl xl:p-0 sm:p-20 p-10">
            <div className="w-full">
              <h1
                className={`${outfit.className} text-5xl lg:text-7xl text-neutral-800`}
              >
                another portfolio site
              </h1>
              <h2
                className={`${outfit.className} font-sans text-3xl lg:text-4xl text-neutral-800`}
              >
                made by ellis collinson
              </h2>
              <p className="font-sans mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum
                asperiores atque quae autem fugiat doloremque? Quisquam
                voluptas, voluptatum, quibusdam.
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
        </section>
        <section className="flex justify-center">
          <div className="max-w-screen-xl w-full text-center p-52 ">
            <h3 className={`${outfit.className} text-6xl font-medium`}>
              web design and development is my thing.
            </h3>
            <p className="font-sans mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores
              atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum,
              quibusdam, quos voluptate dolorum asperiores atque quae autem
              fugiat doloremque? Quisquam voluptas, voluptatum, quibusdam, quos
              voluptate dolorum asperiores atque quae autem fugiat doloremque?
            </p>
          </div>
        </section>
        <section
          className={`md:h-full 2xl:h-3/5 flex justify-center items-center text-center flex flex-col `}
          style={{
            // clipPath: "polygon(0 0, 100% 10vw, 100% 100%, 0 100%)",
            backgroundColor: "#EDEDED",
          }}
        >
          <h1 className={`text-5xl font-normal ${outfit.className}`}>
            Some fluff here
          </h1>
          <div className="flex flex-row items-center flex-col lg:flex-row w-full max-w-screen-xl xl:p-0 px-20 grid-cols-3 grid gap-8">
            <div className="bg-red-400">
              <img src="/static/img/emo.png" alt="cathedral" />
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="bg-red-400">
              <img src="/static/img/emo.png" alt="cathedral" />
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>{" "}
            </div>
            <div className="bg-red-400">
              <img src="/static/img/emo.png" alt="cathedral" />
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>{" "}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
