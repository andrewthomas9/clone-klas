"use client";

import Link from "next/link";
import { Logo } from "./Logo";
// import { SmallLogo } from "./Logo";
import { useState } from "react";

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

  // mobile navigation
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header absolute-center container top-10 z-20">
        <header className="z-50">
          <div className="py-3 px-10 bg-white rounded-[50px] border border-[#00000014] flex justify-between w-full items-center">
            {/* {width > 800 ? <SmallLogo /> : <Logo />} */}
            <Logo />
            <nav className="max-tab-800:hidden">
              <ul className="flex transition-all duration-300 gap-[10px] lg-1150:gap-[30px]">
                {NavLinks.map(({ name, url }) => (
                  <li key={name}>
                    <Link className="navlink" href={url}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex max-tab-800:hidden gap-[10px] transition-all duration-300 lg:gap-8 items-center">
              <Link
                className="text-sm lg-1150:text-base text-blue-100 font-medium"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="text-sm lg-1150:text-base font-medium text-white bg-blue-200 py-4 px-8 rounded-3xl"
                href="/signup"
              >
                Sign up free
              </Link>
            </div>
            <div onClick={openNav} className="tab-800:hidden cursor-pointer">
              {!isOpen ? (
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="none"
                >
                  <path
                    fill="#1127E3"
                    d="m19.557 17.498 6.27-6.256a1.464 1.464 0 0 0-2.07-2.07l-6.256 6.27-6.257-6.27a1.464 1.464 0 0 0-2.07 2.07l6.27 6.256-6.27 6.256a1.459 1.459 0 0 0 0 2.071 1.46 1.46 0 0 0 2.07 0l6.257-6.27 6.256 6.27a1.46 1.46 0 0 0 2.07 0 1.457 1.457 0 0 0 0-2.07l-6.27-6.257Z"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        </header>
      </div>

      {isOpen ? (
        <nav className="h-full tab-800:hidden absolute bg-white w-full">
          <ul className="flex-col text-center absolute-center mt-[150px] space-y-7 items-center justify-center top-60 transition-all duration-300 ">
            {NavLinks.map(({ name, url }) => (
              <li onClick={() => setIsOpen(false)} className="" key={name}>
                <Link
                  className="text-lg font-medium text-gray-100 p-1 active:text-blue-100 hover:text-blue-100 transition-all duration-300"
                  href={url}
                >
                  {name}
                </Link>
              </li>
            ))}
            <div className=" flex flex-col gap-[20px] transition-all duration-300 lg:gap-8 items-center">
              <Link
                className="text-lg text-blue-100 font-medium"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="text-lg font-medium text-white bg-blue-200 py-4 px-8 rounded-3xl"
                href="/signup"
              >
                Sign up free
              </Link>
            </div>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
