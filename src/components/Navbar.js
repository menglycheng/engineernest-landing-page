import React from "react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    name: "Start-Up",
    link: "#",
  },
  {
    name: "Job Seekers",
    link: "#",
  },
  {
    name: "About Us",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

export const Navbar = () => {
  return (
    <header className="w-screen bg-white">
      <div className="flex justify-between items-center px-24 py-8 ">
        {/* left navbar */}
        <div className="flex gap-10 items-center">
          {/* Logo */}
          <div className="flex justify-left items-center gap-2 ">
            <Image src={Logo} alt="" />
            <p className="text-lg font-semibold">ENGINEERNEST</p>
          </div>
          {/* menu item */}
          <div className="flex gap-10">
            {menuItems.map((menuItem, index) => (
              <Link className="text-sm opacity-60" href={menuItem.link}>
                {menuItem.name}
              </Link>
            ))}
          </div>
        </div>
        {/* right navbar  */}
        <button className="text-sm text-white   font-normal bg-blue rounded-2xl py-1 px-2">
          Sign Up For Free Now
        </button>
      </div>
    </header>
  );
};
