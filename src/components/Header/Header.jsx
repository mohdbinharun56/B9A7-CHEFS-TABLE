import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="my-10 flex gap-10 justify-between items-center">
            <div>
                <h1 className="text[#150B2B] text-3xl font-bold">Recipe Calories</h1>
            </div>
            <div className="firasansfont text-[#807498]">
                <nav>
                    <ul className="flex gap-4">
                        <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Home</a></li>
                        <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Recipes</a></li>
                        <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">About</a></li>
                        <li className="hover:text-[#160e27] transition-all duration-1000"><a href="">Search</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex gap-4 items-center">
                <input type="text" placeholder="Search" className="bg-[#dad9db] rounded-full px-6 py-3 font-semibold outline-none" />
                <div className="bg-[#0BE58A] p-2 w-fit h-fit rounded-full cursor-pointer">
                    <CgProfile></CgProfile>
                </div>
            </div>
        </div>
    );
};

export default Header;