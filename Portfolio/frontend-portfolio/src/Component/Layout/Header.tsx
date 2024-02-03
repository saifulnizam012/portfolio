import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Link from "next/link";
import { Link } from "react-router-dom";

const Navbar = () => {
  //nav initial value is false,, to change the nav value do setNav()
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    //change the setNav value to true
    //setNav(!nav) means change it from setNave(false) to setNav(true)
    setNav(!nav);
  };
  return (
    // <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
    <div className="flex flex-grow justify-between items-center h-20 px-10 text-black fixed w-full top-0 z-10 bg-white border-b-2">
      <h1 className="w-full font-bold text-4xl">
        SN<span className=" text-orange-400 ml-2">.</span>
      </h1>
      <ul className="hidden md:flex w-full justify-end">
        <li className="p-4 hover:text-[#00df9a] border-b-2 border-transparent hover:border-[#00df9a] transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-[#00df9a] border-b-2 border-transparent hover:border-[#00df9a] transition-colors">
          <Link to="/project">Project</Link>
        </li>
        <li className="p-4 hover:text-[#00df9a] border-b-2 border-transparent hover:border-[#00df9a] transition-colors">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="p-4 hover:text-[#00df9a] border-b-2 border-transparent hover:border-[#00df9a] transition-colors">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="p-4 ml-3 bg-gray-700 text-[#00df9a] rounded-lg hover:text-[#ffff] hover:scale-110">
          <Link to="/login">Sign In</Link>
        </li>
      </ul>
      {/* md:hidden means if media more than medium it will be hidden */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[60%] h-full border-l border-r-gray-900 bg-gray-900 ease-in-out duration-1000 max-w-[18rem] md:hidden"
            : "fixed right-[-100%]"
        }
      >
        <div className="flex flex-row justify-between items-center p-2">
          <h1 className="w-full font-bold text-3xl text-[#00df9a] m-4">
            React.
          </h1>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Project</li>
          <li className="p-4 border-b border-gray-600">Experience</li>
          <li className="p-4 border-b border-gray-600">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
