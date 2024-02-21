import { LuMenu } from "react-icons/lu";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <div className="custom-structure mt-5 items-center justify-between ">
      <Image
        src="/static/img/ec_logo_black.png"
        alt="Logo"
        width="50"
        height="50"
      />
      {/* <FiMenu size={30} className="cursor-pointer" /> */}
    </div>
  );
}