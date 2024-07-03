import Image from "next/image";

interface Skills {
  imageRoute: string;
  title: string;
  description: string;
}

export default function SkillBox({ skills }: { skills: Skills[] }) {
  return (
    <>
      {skills.map((skill, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 rounded-2xl bg-white p-7 shadow-md xl:shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Image
            className="mb-2 w-64 p-5"
            src={skill.imageRoute}
            alt=""
            width={450}
            height={450}
          />
          <h4>{skill.title}</h4>
          <p>{skill.description}</p>
        </div>
      ))}
    </>
  );
}
