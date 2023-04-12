"use client";

import Link from "next/link";
import { Logo } from "./Logo";
// import { SmallLogo } from "./Logo";
// import { useState, useEffect } from "react";

const NavLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Pricing",
    url: "/pricing",
  },
  {
    name: "Company",
    url: "/company",
  },
  {
    name: "Case Studies",
    url: "/case-studies",
  },
  {
    id: 1,
    name: "Products",
    url: "/products",
  },
];

const Header = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // const updateWidth = () => {
  //   setWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateWidth);

  //   return () => {
  //     window.removeEventListener("resize", updateWidth);
  //   };
  // }, [window.innerWidth]);

  return (
    <div className="header container top-10">
      <header className="z-50">
        <div className="py-3 px-10 bg-white rounded-[50px] border border-[#00000014] flex justify-between shadow-md w-full items-center">
          {/* {width > 800 ? <SmallLogo /> : <Logo />} */}
          <Logo />
          <nav className="max-tab-800:hidden">
            <ul className="flex transition-all duration-300 gap-[10px] lg:gap-[30px]">
              {NavLinks.map(({ name, url }) => (
                <li key={name}>
                  <Link href={url}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex max-tab-800:hidden gap-[10px] transition-all duration-300 lg:gap-8 items-center">
            <Link
              className="text-sm lg:text-base text-blue-100 font-medium"
              href="/login"
            >
              Login
            </Link>
            <Link
              className="text-sm lg:text-base font-medium text-white bg-blue-200 py-4 px-8 rounded-3xl"
              href="/signup"
            >
              Sign up free
            </Link>
          </div>
          <div className="tab-800:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
            >
              <path
                stroke="#1127E3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.332 21.335h21.333M5.332 10.668h21.333H5.332Z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
