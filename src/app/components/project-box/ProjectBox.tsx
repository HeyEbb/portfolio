import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
}

export default function ProjectBox( { projects }: { projects: Project[] }) {
  return (
    <div className="m-3 grid h-screen min-h-[1200px] grid-cols-1 gap-2 lg:grid-cols-2">
      {projects.map((project, i) => (
        <div
          key={i}
          className="relative flex flex-col justify-end p-10 rounded-lg overflow-hidden"
        >
          <div 
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(5px)",
            }}
            className="absolute inset-0"
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <h5 className="relative z-10">{project.title}</h5>
          <p className="relative z-10 text-white">{project.description}</p>
        </div>
      ))}
    </div>
  );
}