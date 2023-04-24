import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="bg-orange-500 text-[#efefef] h-[60px] w-full py-2 px-6 flex justify-center">
      <div className="h-full w-10/12 my-auto flex justify-between items-center">
        {/* left */}
        <h2 className="text-3xl">
          <Link href="/">ZakiAzizi</Link>
        </h2>
        {/* center */}
        <ul className="flex justify-center items-center gap-6 text-[#efefef] text-[18px]">
          <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
            Home
          </li>
          <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
            Hero
          </li>
          <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
            Categories
          </li>
          <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
            Featured
          </li>
          <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
            Contacts
          </li>
        </ul>
        {/* right */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 bg-white px-2 py-1 rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className="text-[#222] outline-none"
            />
            <AiOutlineSearch color="black" />
          </div>
          <div className="relative">
            <AiOutlineShoppingCart size={25} />
            <span className="absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]">
              0
            </span>
          </div>
          <span>Guest</span>
        </div>
      </div>
    </div>
  );
}
export default NavBar