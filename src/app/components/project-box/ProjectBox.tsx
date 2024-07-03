'use client'
interface Project {
  title: string;
  description: string;
  image: string;
  status: string;
  link: string;
}

export default function ProjectBox({ projects }: { projects: Project[] }) {
  return (
    <div className=" grid  grid-cols-1 gap-2 lg:grid-cols-4">
      {projects.map((project, i) => (
        <div
          key={i}
          className="relative flex flex-col justify-end overflow-hidden rounded-lg p-10"
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
          <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
          <div className="flex h-full flex-col justify-between">
            <div
              className={`${project.status === "Active Development" ? "bg-indigo-500" : "bg-gray-600"} relative z-10 mb-10 inline-block w-fit rounded-2xl px-4 py-1 font-semibold text-white`}
            >
              {project.status}
            </div>
            <div>
              <h5 className="relative z-10">{project.title}</h5>
              <p className="relative z-10 text-white">{project.description}</p>
              <button
              onClick={() => {
                if (project.link !== "#") {
                  window.open(`https://${project.link}`, "_blank");
                }
              }}
                disabled={project.link === "#"}
                className={`${project.link === "#" ? "cursor-pointer bg-gray-400" : "bg-indigo-500"} relative z-10 mt-5 rounded-lg px-4 py-2 font-semibold text-white `}
              >
                {project.link === "#" ? "Coming Soon" : "View Project"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
