export default function Header() {
    return (
        <nav className="flex justify-center absolute z-50 w-screen flex items-center  flex-wrap bg-gradient-to-r  p-6">
           <div className="w-screen max-w-screen-xl">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight">Ellis Collinson</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white"
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 0h20v20H0V0zm2 2v16h16V2H2zm3 5h10v2H5V7zm0 4h10v2H5v-2zm0 4h10v2H5v-2z"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                </div>
                <div>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                    >
                        Docs
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                    >
                        Examples
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
                    >
                        Blog
                    </a>
                </div>
            </div>
            </div>
        </nav>
    )
}