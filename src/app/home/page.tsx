import Image from "next/image";
import TopBar from "../components/topbar/TopBar";
import ProjectBox from "../components/ProjectBox";

// fonts
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function Page() {
  // Define constants for magic numbers
  const IMAGE_WIDTH = 450;
  const IMAGE_HEIGHT = 450;

  return (
    <>
      <header className="fixed z-40">
        <TopBar />
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
          <div className="custom-structure h-screen min-h-[1200px] flex-col-reverse justify-center gap-3 lg:min-h-[800px] xl:min-h-[800px] lg:flex-row lg:gap-7 xl:justify-between xl:gap-20">
            {/* left side */}
            <div className={` text-center xl:w-7/12 lg:text-left`}>
              <span className={`${outfit.className} text-3xl font-medium`}>
                Hi there,
              </span>
              <h1
                className={`${outfit.className}`}
              >{`I'm Ellis Collinson.`}</h1>
              <span className="text-lg font-light xl:text-lg">
                {`  Passionate web designer & developer crafting beautiful, functional, and impactful websites. Explore my design & development projects to see ideas come to life!`}
              </span>
            </div>

            {/* right side */}
            <div className="flex items-center justify-center">
              <Image
                src="/static/img/EllisAbstractDark.png"
                alt="A picture of Ellis Collinson in grey scale"
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                className="h-auto w-10/12 md:w-7/12 lg:w-full xl:w-full xl:p-16"
              />
            </div>
          </div>
        </section>

        {/* about me */}
        <section>
          <div
            className={`custom-structure flex-col py-28 text-center lg:px-10 lg:py-48 xl:-mt-32 xl:px-56 xl:py-72`}
          >
            <h3 className={`${outfit.className} pb-8 lg:pb-10`}>
              Welcome to My Creative Playground.
            </h3>
            <p>
              This website serves as a comprehensive repository for tracking my
              personal goals, ongoing projects, and notable achievements. Beyond
              being a personal resource, it also functions as a platform to
              exhibit my skills. I envision this website as an invaluable tool
              for self-reflection, allowing me to assess my growth and evolution
              as both a designer and developer. <br />
              <br />
              Constructed using Next.js, a React framework, with styling
              implemented through Tailwind CSS, and design conceptualised using
              Figma, this website reflects a commitment to utilising
              cutting-edge technologies. Hosted on Vercel, the platform ensures
              seamless accessibility and performance. In the immediate future,
              the site is poised to evolve into a small-scale Content Management
              System (CMS), facilitating the hosting of a blog to share
              insights, progress updates, and creative ideas.
            </p>
          </div>
        </section>

        <section
          className={`
        
        flex
        flex-col
        items-center
        justify-center
        bg-neutral-200
        `}
        >
          <div
            className={` custom-structure flex flex-col items-center py-28 text-center lg:py-48 xl:py-72
        `}
          >
            <h3
              className={`text-6xl ${outfit.className}`}
            >{`Here's what I do.`}</h3>
            <div className="grid grid-cols-1 justify-items-center gap-20 pt-10 md:grid-cols-2 xl:grid-cols-2 xl:gap-24 2xl:grid-cols-4">
              <div className="flex flex-col gap-4 ">
                <Image
                  className="px-5 xl:p-14"
                  src="/static/img/graphic-design.png"
                  alt=""
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                />
                <h4 className={`${outfit.className} `}>Graphic Design</h4>
                <p>
                  I love creating small-scale graphics, such as logos and icons.
                  Many of these designs have been uploaded and have seen{" "}
                  <b>14,703*</b> downloads and counting .
                </p>
              </div>

              <div className="flex flex-col gap-4 ">
                <Image
                  className="px-5 xl:p-14"
                  src="/static/img/blueprint.png"
                  alt=""
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                />
                <h4 className={`${outfit.className} `}>
                  Web Design & Development
                </h4>
                <p>
                  Scoping, designing, and implementing systems is a forte of
                  mine. I have experience with both monolithic and microservice
                  architectures.
                </p>
              </div>

              <div className="flex flex-col gap-4 ">
                <Image
                  className="px-5 xl:p-14"
                  src="/static/img/cloud-computing.png"
                  alt=""
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                />
                <h4 className={`${outfit.className} `}>Cloud Computing</h4>
                <p>
                  I have experience constructing and deploying my own cloud
                  solutions using AWS, Azure, and GCP. I also have experience
                  with Docker and Kubernetes.
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <Image
                  className="px-5 xl:p-14"
                  src="/static/img/app-development.png"
                  alt=""
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                />
                <h4 className={`${outfit.className} `}>App Development</h4>
                <p>
                  Thanks to React Native, I have built a series of mobile apps
                  all with different purposes and audiences. I have also
                  experimented with Flutter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <div className="max-w-4xl p-14 text-center ">
            <h3
              className={`${outfit.className} pb-5 pt-10 text-center text-6xl`}
            >
              Current Projects
            </h3>
            <p>
              {" "}
              Here are my currently active projects, all of which are in various
              stages of development. The currently live version of each of these
              projects are available to view, if there are any projects that are
              locked behidn a login screen, please contact me for access.
            </p>
          </div>
          {/* project box is a custom component I built that accepts an array of 4 project objects. */}
          <ProjectBox
            projects={[
              {
                title: "Improved Spotify (Design)",
                description:
                  "Nostrud non in eiusmod qui incididunt labore enim enim. Dolor irure eiusmod et eiusmod Lorem minim exercitation occaecat aliquip eiusmod adipisicing. Sint dolor ipsum aliqua culpa proident occaecat voluptate ut consequat id pariatur consectetur esse. Dolore sint minim magna nostrud qui pariatur adipisicing quis laboris aliqua. Laborum nostrud cupidatat veniam aliqua ad.",
                image: "/static/img/Improved_spotify.png",
              },
              {
                title: "Personal CMS",
                description:
                  "Nostrud non in eiusmod qui incididunt labore enim enim. Dolor irure eiusmod et eiusmod Lorem minim exercitation occaecat aliquip eiusmod adipisicing. Sint dolor ipsum aliqua culpa proident occaecat voluptate ut consequat id pariatur consectetur esse. Dolore sint minim magna nostrud qui pariatur adipisicing quis laboris aliqua. Laborum nostrud cupidatat veniam aliqua ad.",
                image: "/static/img/cms.jpg",
              },
              {
                title: "React Showcase",
                description:
                  "Nostrud non in eiusmod qui incididunt labore enim enim. Dolor irure eiusmod et eiusmod Lorem minim exercitation occaecat aliquip eiusmod adipisicing. Sint dolor ipsum aliqua culpa proident occaecat voluptate ut consequat id pariatur consectetur esse. Dolore sint minim magna nostrud qui pariatur adipisicing quis laboris aliqua. Laborum nostrud cupidatat veniam aliqua ad.",
                image: "/static/img/react.jpg",
              },
              {
                title: "Mini Social Network",
                description:
                  "Nostrud non in eiusmod qui incididunt labore enim enim. Dolor irure eiusmod et eiusmod Lorem minim exercitation occaecat aliquip eiusmod adipisicing. Sint dolor ipsum aliqua culpa proident occaecat voluptate ut consequat id pariatur consectetur esse. Dolore sint minim magna nostrud qui pariatur adipisicing quis laboris aliqua. Laborum nostrud cupidatat veniam aliqua ad.",
                image: "/static/img/cms.jpg",
              },
            ]}
          />
        </section>

        <footer className="flex flex-col items-center bg-neutral-900">
          <div className="bg w-full bg-yellow-300 p-3 text-center text-neutral-900">
            <p className="m-0">Thank you for visiting my portfolio! 🥳</p>
          </div>
          <div className="grid w-8/12 grid-cols-3 p-4">
            <p className="text-white">Built by Ellis Collinson</p>
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
