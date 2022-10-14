import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex items-center justify-start my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      {/* Mobile side bar*/}
      <div className="absolute md:hidden block top-6 right-3 z-10">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" />
        )}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;
