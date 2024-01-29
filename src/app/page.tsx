import Image from "next/image";
import Header from "./components/header/header";
import { FiMenu } from "react-icons/fi";

// fonts
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function Page() {
  return (
    <>
      <header className="fixed z-40">
        <div className="custom-structure mt-5 items-center justify-between">
          <Image
            src="/static/img/ec_logo_black.png"
            alt="Logo"
            width="50"
            height="50"
          />
          <FiMenu size={30} className="cursor-pointer " />
        </div>
      </header>
      <main>
        {/* setting a fixed header */}

        {/* background holder */}
        <section
          style={{
            // gives the yellow background a slanted edge on the bottom
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% calc(100% - 17vw))",
            backgroundImage: "url('/static/img/yellow_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* header hero container */}
          <div className="custom-structure h-screen min-h-[1000px] flex-col-reverse justify-center gap-3 lg:min-h-[1000px] xl:min-h-[700px] xl:flex-row xl:justify-between xl:gap-28">
            {/* left side */}
            <div className={`${outfit.className} xl:w-7/12 text-center xl:text-left`}>
              <h1>Hey there, Im Ellis Collinson</h1>
              <h2>A portfolio built with love (and Next.js).</h2>
              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum
                asperiores atque quae autem fugiat doloremque? Quisquam
                voluptas, voluptatum, quibusdam, quos voluptate dolorum
                asperiores atque
              </p>
            </div>

            {/* right side */}
            <div className="flex items-center justify-center">
              <Image
                src="/static/img/EllisAbstractDark.png"
                alt="A picture of Ellis Collinson in grey scale"
                width="450" // defining the width and height that next.js will use to optimise the image
                height="450"
                className="h-auto w-10/12 md:w-7/12 xl:p-16 xl:w-full"
              />
            </div>
          </div>
        </section>

        {/* about me */}
        <section>
          <div
            className={` ${outfit.className} custom-structure m-7 flex-col py-28 text-center lg:px-10 lg:py-48 xl:-mt-32 xl:px-56 xl:py-72`}
          >
            <h3 className="pb-8 lg:pb-10">I’m a web designer and developer.</h3>
            <p>
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
          className={`
        ${outfit.className} 
        flex
        flex-col
        items-center
        justify-center
        bg-neutral-200
        `}
        >
          <div
            className={` m-7 flex flex-col items-center py-14 text-center lg:w-8/12 lg:py-56
        `}
          >
            <h3 className="text-4xl">Im also pretty good at other stuff.</h3>
            <div className="grid grid-cols-1 justify-items-center gap-10 pt-10 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
              <div className="flex flex-col gap-4 ">
                <img src="/static/img/emo.png" alt="" />
                <h4>Graphic Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptas, voluptatum, quibusdam, quos voluptate
                  dolorum asperiores atque quae autem fugiat doloremque?
                </p>
              </div>

              <div className="flex flex-col gap-4 ">
                <img src="/static/img/emo.png" alt="" />
                <h4>System Architecture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptas, voluptatum, quibusdam, quos voluptate
                  dolorum asperiores atque quae autem fugiat doloremque?
                </p>
              </div>

              <div className="flex flex-col gap-4 ">
                <img src="/static/img/emo.png" alt="" />
                <h4>Cloud Computing</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptas, voluptatum, quibusdam, quos voluptate
                  dolorum asperiores atque quae autem fugiat doloremque?
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <img src="/static/img/emo.png" alt="" />
                <h4>App Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptas, voluptatum, quibusdam, quos voluptate
                  dolorum asperiores atque quae autem fugiat doloremque?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col ">
          <h3 className="pb-5 pt-10 text-center text-4xl">
            My Personal Projects
          </h3>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full bg-yellow-500 ">
              <div className="h-96 bg-green-500 lg:h-1/2">Top</div>
              <div className="h-96 bg-green-800 lg:h-1/2">Bottom</div>
            </div>
            <div
              className="
            h-96
              w-full
              bg-blue-500
              lg:h-[75vh]
      "
            >
              Right
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center bg-neutral-900">
          <div className="bg w-full bg-yellow-300 p-3 text-center text-neutral-900">
            <p className="m-0">Thank you for visiting my portfolio! 🥳</p>
          </div>
          <div className="grid w-8/12 grid-cols-3 p-4 text-neutral-100 text-white">
            <div>
              <p>Built by Ellis Collinson</p>
            </div>
            <div></div>
            <div className="text-right">
              <p>Version 0.2</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
