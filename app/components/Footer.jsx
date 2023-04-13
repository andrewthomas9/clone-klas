import React from "react";
import { FooterLogo } from "./Logo";
import Link from "next/link";

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
    name: "Products",
    url: "/products",
  },
  {
    name: "Terms Of Use",
    url: "https://drive.google.com/file/d/14La2oC1pFe2SUhFx-CIzfI47VAez0-HV/view?usp=drivesdk",
  },
  {
    name: "Privacy Policy",
    url: "https://drive.google.com/file/d/14La2oC1pFe2SUhFx-CIzfI47VAez0-HV/view?usp=drivesdk",
  },
];

const Footer = () => {
  return (
    <footer className="bg-blue-200">
      <div className="container">
        <div className="py-10 sm:p-10 w-[85%] mx-auto">
          <div className="flex justify-between">
            <FooterLogo />
            <ul className="flex items-center justify-center space-x-[2.5rem]">
              <li>
                <a
                  href="https://www.instagram.com/tryklas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M12 9.471a3.13 3.13 0 0 0-3.125 3.124 3.13 3.13 0 0 0 3.124 3.124 3.13 3.13 0 0 0 3.124-3.124A3.13 3.13 0 0 0 12 9.471Zm9.37 3.124c0-1.293.011-2.576-.062-3.867-.072-1.5-.414-2.831-1.511-3.928-1.1-1.1-2.428-1.44-3.928-1.512-1.294-.072-2.576-.06-3.867-.06-1.294 0-2.576-.012-3.868.06-1.5.073-2.831.415-3.928 1.512-1.1 1.1-1.439 2.428-1.512 3.928-.072 1.294-.06 2.576-.06 3.867 0 1.292-.012 2.576.06 3.867.073 1.5.415 2.832 1.512 3.928 1.1 1.1 2.428 1.44 3.928 1.512 1.294.073 2.576.061 3.867.061 1.294 0 2.576.012 3.868-.06 1.5-.073 2.83-.416 3.928-1.512 1.099-1.1 1.439-2.429 1.511-3.929.076-1.291.061-2.573.061-3.867ZM12 17.402a4.8 4.8 0 0 1-4.808-4.807A4.8 4.8 0 0 1 12 7.788a4.8 4.8 0 0 1 4.807 4.807A4.8 4.8 0 0 1 12 17.402Zm5.003-8.688a1.121 1.121 0 0 1-1.123-1.123c0-.62.502-1.122 1.123-1.122a1.121 1.121 0 0 1 .794 1.917 1.121 1.121 0 0 1-.794.328Z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/klas_hq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M23.643 5.53c-.835.37-1.732.62-2.675.732a4.67 4.67 0 0 0 2.049-2.578 9.3 9.3 0 0 1-2.959 1.13 4.66 4.66 0 0 0-7.938 4.25 13.23 13.23 0 0 1-9.6-4.868 4.66 4.66 0 0 0 1.442 6.22 4.648 4.648 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.693 4.693 0 0 1-2.105.08 4.661 4.661 0 0 0 4.353 3.234A9.348 9.348 0 0 1 2.05 19.77a9.5 9.5 0 0 1-1.111-.065 13.176 13.176 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/tryklas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    fill="none"
                  >
                    <g clip-path="url(#linkedin_svg__a)">
                      <path
                        fill="#fff"
                        d="M4.705.602a4.715 4.715 0 0 0-4.701 4.7v14.589c0 2.585 2.116 4.7 4.701 4.7h14.588c2.585 0 4.7-2.115 4.7-4.7V5.303a4.715 4.715 0 0 0-4.7-4.701H4.705ZM5.887 4.56c1.24 0 2.003.814 2.027 1.884 0 1.046-.787 1.882-2.05 1.882H5.84c-1.216 0-2.002-.836-2.002-1.882 0-1.07.81-1.884 2.05-1.884Zm10.682 5c2.384 0 4.171 1.558 4.171 4.906v6.251h-3.623v-5.832c0-1.465-.524-2.465-1.835-2.465-1 0-1.598.674-1.86 1.325-.095.233-.119.558-.119.884v6.088H9.68s.048-9.879 0-10.902h3.624v1.544c.482-.743 1.343-1.8 3.265-1.8Zm-12.517.256h3.623v10.901H4.052v-10.9Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="linkedin_svg__a">
                        <path fill="#fff" d="M0 .594h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <nav className="mt-[45px] mb-[28px] flex items-center justify-center">
              <ul className="flex gap-[19px] justify-center flex-wrap">
                {NavLinks.map(({ name, url }) => (
                  <li key={name}>
                    <Link className="footer_navlink" href={url}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="text-sm font-normal text-[hsla(0,0%,100%,.5)] text-center">© Klas Global, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
