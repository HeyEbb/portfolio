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
          className="flex flex-col items-center gap-2 rounded-xl bg-white p-7 shadow-md xl:shadow-xl"
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
