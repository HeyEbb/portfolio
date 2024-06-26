import Image from "next/image";
import TopBar from "../components/topbar/TopBar";
import ProjectBox from "../components/project-box/ProjectBox";
import SkillBox from "../components/skill-box/SkillBox";

// fonts
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin-ext"],
});

export default function Page() {
  // Define constants for magic numbers
  const IMAGE_WIDTH = 450;
  const IMAGE_HEIGHT = 450;

  // Core return
  return (
    <>
      {/* header of the application, currently just holding the logo and the navigation (still in development) */}
      <header className="fixed z-40">
        <TopBar />
      </header>

      {/* main content */}
      <main>
        {/* background holder, contains a cool yellow slant */}
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
          <div className="custom-structure h-screen min-h-[800px] flex-col-reverse justify-center gap-3 sm:min-h-[900px] lg:min-h-[800px] lg:flex-row lg:gap-7 xl:justify-between xl:gap-20">
            {/* left side */}
            <div className={`text-center lg:text-left xl:w-7/12`}>
              <span
                className={`${outfit.className} text-3xl font-light md:text-5xl`}
              >
                Hello,
              </span>
              <h1
                className={`${outfit.className}`}
              >{`I'm Ellis Collinson.`}</h1>
              <span className="text-lg font-light xl:text-lg">
                {`Passionate web designer & developer crafting beautiful, functional, and impactful websites. Explore my design & development projects to see ideas come to life!`}
              </span>
            </div>

            {/* right side */}
            <div className="flex items-center justify-center">
              <Image
                src="/static/img/EllisAbstractDark.png"
                alt="A picture of Ellis Collinson in grey scale"
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                className="h-auto w-7/12 sm:w-6/12 lg:w-full xl:p-16"
              />
            </div>
          </div>
        </section>

        {/* about me */}
        <section>
          <div
            className={`custom-structure lg:py-26 flex-col py-28 text-center lg:px-10 xl:-mt-16 xl:px-56 xl:py-44`}
          >
            <h3 className={`${outfit.className} pb-5`}>
              What is this website?
            </h3>
            <p className="w-10/12">
              This website serves as a comprehensive repository for tracking my
              personal goals, ongoing projects, and notable achievements. Beyond
              being a personal resource, it also functions as a platform to
              exhibit my skills. I envision this website as an invaluable tool
              for self-reflection, allowing me to assess my growth and evolution
              as both a designer and developer.
              <br />
              <br />
              Constructed using Next.js, a React framework, with styling
              implemented through Tailwind CSS, and design conceptualised using
              Figma, this website reflects a commitment to utilising
              cutting-edge technologies. Hosted on Vercel, the platform ensures
              seamless accessibility and performance. In the immediate future,
              the site is poised to evolve into a small-scale Content Management
              System (CMS), facilitating the hosting of a blog to share
              insights, progress updates, and creative ideas.
              <br />
              <br />
            </p>
            <p className="font-bold">
              This website is still under very active development.
            </p>
          </div>
        </section>

        {/* The 'heres what I do' section */}
        {/*  */}
        <section className={`bg-neutral-200`}>
          <div
            className={`custom-structure lg:py-26 flex-col items-center py-28 text-center xl:py-44 
        `}
          >
            <h3 className={`${outfit.className} pb-5`}>{`My Focus`}</h3>
            <p className="w-10/12">
              Here are a few of the skills that I have have been focusing on in
              the past few years. I have been working on a variety of projects,
              some of which are still in development, and some of which are
              live. I have also been working on a few personal projects, such as
              this website, and a few others that are still in the planning
              stages.
            </p>
            <div className="grid grid-cols-1 justify-items-center gap-5 pt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
              <SkillBox
                skills={[
                  {
                    imageRoute: "/static/img/blueprint.png",
                    title: "Design & FE Development",
                    description:
                      "Initially starting a core design, I have since moved to front-end development, typically using Frameworks such as React, with a focus on Tailwind CSS.",
                  },
                  {
                    imageRoute: "/static/img/cloud-computing.png",
                    title: "DevOps & Cloud Computing",
                    description:
                      "I have experience with DevOps and Cloud Computing, including AWS, Azure, and GCP. I have also worked with Docker and Kubernetes.",
                  },
                  {
                    imageRoute: "/static/img/app-development.png",
                    title: "App Development",
                    description:
                      "Thanks to React Native, I have built a series of mobile apps all with different purposes and audiences. I have also experimented with Flutter.",
                  },
                  {
                    imageRoute: "/static/img/graphic-design.png",
                    title: "Graphic Design",
                    description:
                      "I love creating small-scale graphics, such as logos and icons. Many of these designs have been uploaded and have seen 14,703 (since last check) downloads and counting.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <div className="max-w-4xl p-14 text-center">
            <h3
              className={`${outfit.className} pb-5 pt-10 text-center text-6xl`}
            >
              Active Personal Projects
            </h3>
            <p>
              Here are my currently active projects, all of which are in various
              stages of development. The currently live version of each of these
              projects are available to view, if there are any projects that are
              locked behind a login screen, please contact me for access.
            </p>
          </div>
          {/* project box is a custom component I built that accepts an array of 4 project objects. */}
          <ProjectBox
            projects={[
              {
                title: "Spotify Clone",
                description:
                  "I've been working on a Spotify clone (design only for now) using Next.js and Tailwind CSS. The project is still in its early stages, but I'm excited to see how it progresses.",
                image: "/static/img/iphone_spotify.jpg",
                status: "Active Development",
                link: "spotify.elliscollinson.co.uk",
              },
              {
                title: "Personal Portfolio / CMS",
                description:
                  "I'm currently working on a personal CMS using Next.js and Tailwind CSS. The CMS will be used to host a blog, which will be used to share insights, progress updates, and creative ideas.",
                image: "/static/img/cms.jpg",
                status: "Active Development",
                link: "elliscollinson.co.uk",
              },
              {
                title: "Contract Manager",
                description:
                  "I'm developing a fullstack Next.js web app that allows for the management of contracts. The app will be used to store, edit, and delete contracts, as well as to create new ones. This includes full JWT authentication and a custom API.",
                image: "/static/img/react.jpg",
                status: "Active Development",
                link: "#",
              },
              {
                title: "Coming Soon...",
                description:
                  "This mini-project is still being planned. Please come back soon to see what I'm working on!",
                image: "/static/img/black.jpg",
                status: "Planning Stages",
                link: "#",
              },
            ]}
          />
        </section>

        <section className="my-20 flex flex-col items-center">
          <div className="max-w-4xl p-14 text-center">
            <h3
              className={`${outfit.className} pb-5 pt-10 text-center text-6xl`}
            >
              Closed Projects
            </h3>
            <p>
              I&apos;m currently curating a portfolio showcasing my 50+ most
              impactful projects. In the meantime, feel free to{" "}
              <a
                className="font-semibold underline"
                href="mailto:hello@ebber.dev"
              >
                reach out to discuss my work{" "}
              </a>
              in more detail!
            </p>
          </div>
          {/* project box is a custom component I built that accepts an array of 4 project objects. */}
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
