import { LuMenu } from "react-icons/lu";

export default function Header() {
  return (
    <nav className="flex justify-center absolute z-50 w-screen flex items-center flex-wrap bg-gradient-to-r py-6 px-20">
      <div className="w-screen max-w-screen-xl flex justify-between">
        <span className="font-semibold text-xl min-w-max text-black">
          Ellis Collinson
        </span>

        <div className="block lg:flex lg:items-center lg:w-auto">
          <LuMenu className="text-2xl"/>
        </div>
      </div>
    </nav>
  );
}
