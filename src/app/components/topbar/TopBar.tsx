import { LuMenu } from "react-icons/lu";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="core-structure flex w-full justify-between border-b-2 p-5">
      <Image
        src="/static/img/ec_logo_black.png"
        alt="Logo"
        width="50"
        height="50"
      />
      {/* start of naivation */}
      <div className="flex items-center justify-between">
        <div className="hidden gap-5 font-light md:flex">
          <a href="#about">Blog</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="md:hidden">
          <FiMenu size="1.5em" />
        </div>
        {/* version */}
        <div className="ml-6 flex items-center justify-center  font-normal">
          <span>Version 1.0.0</span>
        </div>
      </div>
    </div>
  );
}
