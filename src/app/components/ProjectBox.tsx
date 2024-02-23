import React from "react";

export default function ProjectBox({
  projects,
}: {
  projects: {
    title: string;
    description: string;
    image: string;
  }[];
}) {
  return (
    <div className="m-3 grid h-screen min-h-[1200px] grid-cols-1 lg:grid-cols-2 gap-2">
      {projects.map((project, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex flex-col justify-end p-10"
        >
          <h5>{project.title}</h5>
          <p className="text-white">{project.description}</p>
        </div>
      ))}

    </div>
  );
}

export function SingleProjectBox() {
  return (
    <div
      style={{
        backgroundImage: "url('/static/img/Improved_spotify.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex h-full w-full flex-col justify-end p-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <h5>Improved Spotify (Design)</h5>
        <p className="text-white">
          Nostrud non in eiusmod qui incididunt labore enim enim. Dolor irure
          eiusmod et eiusmod Lorem minim exercitation occaecat aliquip eiusmod
          adipisicing. Sint dolor ipsum aliqua culpa proident occaecat voluptate
          ut consequat id pariatur consectetur esse. Dolore sint minim magna
          nostrud qui pariatur adipisicing quis laboris aliqua. Laborum nostrud
          cupidatat veniam aliqua ad.
        </p>
      </div>
    </div>
  );
}
