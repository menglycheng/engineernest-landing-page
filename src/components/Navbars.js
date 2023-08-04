"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbars() {
  return (
    <Disclosure as="nav" className="bg-white ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex justify-start items-center gap-2 ">
                    <Image src={Logo} alt="" />
                    <p className="text-lg font-semibold">ENGINEERNEST</p>
                  </div>
                  <div className="hidden md:ml-6 md:flex md:justify-center md:items-center md:space-x-8">
                    {menuItems.map((menuItem, index) => (
                      <Link
                        className="text-sm opacity-60"
                        key={index}
                        href={menuItem.link}
                      >
                        {menuItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <button className="hidden text-xs md:flex md:justify-center md:items-center text-white   font-normal bg-blue rounded-2xl py-1 px-4">
                    Sign Up For Free Now
                  </button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* right */}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 text-right pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {menuItems.map((menuItem, index) => (
                <Disclosure.Button
                  key={index}
                  className="block  border-transparent py-2 pl-3 pr-4 text-base opacity-60 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  href={menuItem.link}
                >
                  {menuItem.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
