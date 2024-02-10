import { useState } from "react";
import { menu, close, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((n, index) => (
          <li
            key={n.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary transition-all ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${n.id}`}>{n.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="toggle"
          className="w-[22px] h-[22px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none sm:flex justify-end items-center flex-1 flex-col">
          {navLinks.map((n, index) => (
            <li
              key={n.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mb-0" : "mb-10"
              }`}
            >
              <a href={`#${n.id}`}>{n.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
