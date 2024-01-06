import Image from "next/image";
import Header from "./components/header/header";

// fonts
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function Page() {
  return (
    <main>
      {/* background holder */}
      <section
        className="
        flex 
        justify-center"
        style={{
          // gives the yellow background a slanted edge
          clipPath: "polygon(100% 0, 0 0, 0 100%, 100% calc(100% - 20vw))",
          backgroundImage: "url('/static/img/yellow_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* container */}
        <div
          className="
        container
       mx-5 
       md:mx-10 
       h-full flex 
       flex-col 
       xl:flex-row 
       items-center"
        >
          {/* <div className={`bg-gray-500 absolute container h-12`}>Header</div> */}
          {/* left side, adjusting the padding on behalf of the right side */}
          <div
            className={`
          ${outfit.className} 
          flex 
          flex-col 
          px-10 
          py-20 
          lg:pr-2 
          xl:py-80
          2xl:py-96
          xl:w-2/3 
          `}
          >
            <h1>Hey there, Im Ellis Collinson</h1>
            <h2>A portfolio built with love (and Next.js).</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque?</p>
          </div>

          {/* right side */}
          <Image
            src="/static/img/ellis.png"
            alt="A picture of Ellis Collinson in grey scale"
            width="450" // defining the width and height that next.js will use to optimise the image
            height="450"
            className="   
           h-full
           w-auto
           "
          />
        </div>
      </section>

      {/* about me */}
      <section className="flex justify-center">
        <div
          className={`
        ${outfit.className} 
        container
        flex
        flex-col
        justify-center
        items-center
        text-center
        py-32
        lg:py-64
        lg:px-10
        xl:py-64
        m-7
        xl:-mt-32
       `}
        >
          <h3 className="pb-8 lg:pb-10">I’m a web designer and developer.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque? Quisquam voluptas, voluptatum, quibusdam, quos voluptate dolorum asperiores atque quae autem fugiat doloremque?</p>
        </div>
      </section>

      <section
        className={`
        ${outfit.className} 
        w-full 
        h-screen 
        flex 
        justify-center 
        items-center 
        flex-col 
        p-72`}
        style={{
          // gives the yellow background a slanted edge
          // clipPath: "polygon(100% calc(25vw), 0 0, 0 100%, 100% 100%)",
          backgroundColor: "#EDEDED",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h4>Im also pretty good at other stuff.</h4>
        <div className="columns-3">
          <div className="w-96 bg-yellow-400">
            <img src="/static/img/emo.png" alt="cathedral" />
          </div>

          <div className="w-96 bg-yellow-400">
            <img src="/static/img/emo.png" alt="cathedral" />
          </div>

          <div className="w-96 bg-yellow-400">
            <img src="/static/img/emo.png" alt="cathedral" />
          </div>
        </div>
      </section>
    </main>
  );
}
