import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    const handleNav = () => {
        document.getElementById('smallDevice').classList.toggle('hidden');
    }
    return (
        <>
            {/* large and medium device */}
            <div id="lmDevice" className="hidden my-10 md:flex gap-5 lg:gap-10 justify-around lg:justify-between items-center">
                <div>
                    <h1 className="text[#150B2B] text-xl lg:text-3xl font-bold">Recipe Calories</h1>
                </div>
                <div className="firasansfont text-[#807498]">
                    <nav>
                        <ul className="flex gap-2 lg:gap-4">
                            <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Home</a></li>
                            <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Recipes</a></li>
                            <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">About</a></li>
                            <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Search</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-2 lg:gap-4 items-center">
                    <input type="text" placeholder="Search" className="bg-[#dad9db] rounded-full px-6 py-3 font-semibold outline-none" />
                    <div className="bg-[#0BE58A] p-2 w-fit h-fit rounded-full cursor-pointer">
                        <CgProfile></CgProfile>
                    </div>
                </div>
            </div>

            {/* small device */}
            <div className="flex items-center p-4 md:hidden">
                <div className="mr-auto w-fit">
                    <h1 className="text[#150B2B] font-bold">Recipe Calories</h1>
                </div>
                <div>
                    <div onClick={handleNav} className="cursor-pointer ml-auto w-fit">
                        <IoMdMenu />
                    </div>
                </div>
            </div>
            <div id="smallDevice" className="hidden firasansfont text-[#807498] w-fit ml-auto">
                <nav className="bg-gray-300 w-fit rounded-lg ml-3">
                    <ul className="p-4">
                        <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Home</a></li>
                        <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Recipes</a></li>
                        <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">About</a></li>
                        <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Search</a></li>
                    </ul>
                </nav>
            </div>

        </>
    );
};

export default Header;