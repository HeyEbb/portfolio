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
      <header className="fixed z-40 ">
        <div className="items-center justify-between mt-5 custom-structure">
          <Image src="/static/img/ec_logo_black.png" alt="Logo" width="50" height="50" />
          <FiMenu size={30} className="cursor-pointer " />
        </div>
      </header>
      <main>
        {/* setting a fixed header */}

        {/* background holder */}
        <section
          style={{
            // gives the yellow background a slanted edge on the bottom
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% calc(100% - 20vw))",
            backgroundImage: "url('/static/img/yellow_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* header hero container */}
          <div className="flex-col justify-between gap-10 pt-32 custom-structure lg:gap-10 xl:gap-28 xl:flex-row md:pt-36 xl:py-36 2xl:py-44">
            
            {/* left side */}
            <div className={`${outfit.className} xl:w-6/12`}>
              <h1>Hey there, Im Ellis Collinson</h1>
              <h2>A portfolio built with love (and Next.js).</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque</p>
            </div>

            {/* right side */}
            <div className="xl:w-5/12">
              <Image
                src="/static/img/ellis.png"
                alt="A picture of Ellis Collinson in grey scale"
                width="450" // defining the width and height that next.js will use to optimise the image
                height="450"
                className="w-full h-auto"
              />
            </div>

            
          </div>
        </section>

        {/* about me */}
        <section>
          <div className={` ${outfit.className} custom-structure flex-col text-center py-28 lg:py-48 xl:py-72 lg:px-10 xl:px-56 m-7 xl:-mt-32`}>
            <h3 className="pb-8 lg:pb-10">I’m a web designer and developer.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque?</p>
          </div>
        </section>

        <section
          className={`
        ${outfit.className} 
        bg-neutral-200
        flex
        flex-col
        justify-center
        items-center
        `}
        >
          <div
            className={` lg:w-8/12 text-center flex flex-col items-center py-14 lg:py-56 m-7
        `}
          >
            <h3 className="text-4xl">Im also pretty good at other stuff.</h3>
            <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 justify-items-center">
              <div className="flex flex-col gap-4 ">
                <img src="/static/img/emo.png" alt="" />
                <h4>Graphic Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque?</p>
              </div>

              <div className="flex flex-col gap-4 ">
                <img src="/static/img/emo.png" alt="" />
                <h4>System Architecture</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque?</p>
              </div>

              <div className="flex flex-col gap-4 ">
                <img src="/static/img/emo.png" alt="" />
                <h4>Cloud Computing</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque?</p>
              </div>
              <div className="flex flex-col gap-4 ">
                <img src="/static/img/emo.png" alt="" />
                <h4>App Development</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque?</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col ">
          <h3 className="pt-10 pb-5 text-4xl text-center">My Personal Projects</h3>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full bg-yellow-500 ">
              <div className="bg-green-500 h-96 lg:h-1/2">Top</div>
              <div className="bg-green-800 h-96 lg:h-1/2">Bottom</div>
            </div>
            <div
              className="
            bg-blue-500
              w-full
              h-96
              lg:h-[75vh]
      "
            >
              Right
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center bg-neutral-900">
          <div className="w-full p-3 text-center bg-yellow-300 bg text-neutral-900">
            <p className="m-0">Thank you for visiting my portfolio! 🥳</p>
          </div>
          <div className="grid w-8/12 grid-cols-3 p-4 text-white text-neutral-100">
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
