import { LuMenu } from "react-icons/lu";

export default function Header() {
  return (
    <nav className="absolute flex justify-center z-50 w-full py-6 max-w-screen-xl bg-red-600">

        <span className="font-semibold text-xl min-w-max text-black">
          Ellis Collinson
        </span>

        <div className="block lg:flex lg:items-center lg:w-auto">
          <LuMenu className="text-2xl"/>
        </div>
      
    </nav>
  );
}
