import React from "react";
import { Link } from "react-router-dom";
import mountain from "../assets/images/webp/mountain.webp";
import { footerIcons, footerLinks } from "./common/Helper";
import { FooterElips, Logo, Mountain } from "./common/Icon";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <img src={mountain} alt="mountain" className="-mb-0.5" />
      <div className="bg-dark-green">
        <div className="relative">
          <div className="sm:block hidden absolute left-0 top-0 pointer-events-none">
            <FooterElips />
          </div>
          <div className="sm:block hidden absolute right-0 bottom-[11%] pointer-events-none">
            <Mountain />
          </div>
          <div className="max-w-[1180px] mx-auto px-5 sm:pt-[67px] pt-12">
            <div className="flex md:flex-row flex-col gap-10">
              <div className="flex flex-col">
                <Link
                  aria-label="Read more about Seminole tax hike"
                  to="/"
                  className="flex justify-center md:justify-start"
                >
                  <Logo />
                </Link>
                <p className="font-Poppins font-normal sm:text-base text-sm text-white md:max-w-[500px] text-opacity-70 md:text-start text-center leading-sm pt-5">
                  Sherpa Property Management is a full service property
                  management company handling the daily management of the
                  property, tenant relations, maintenance of the property,
                  property accounting, rental licensing & lead paint
                  certificates
                </p>
              </div>
              <div className="flex md:justify-end justify-center lg:gap-20 sm:gap-16 xs:gap-12 gap-7 md:ms-auto">
                <div className="flex flex-col w-[89px]">
                  <p className="font-Poppins font-normal text-base text-white leading-sm">
                    Quick links
                  </p>
                  <ul>
                    {footerLinks.map((obj, index) => (
                      <li
                        key={index}
                        className="flex flex-col list-none sm:mt-4 mt-3 opacity-70 hover:opacity-100 duration-300 transition-all ease-linear text-white"
                      >
                        <Link
                          aria-label="Read more about Seminole tax hike"
                          to={obj.src}
                          className="font-Poppins font-normal sm:text-base text-sm leading-sm"
                        >
                          {obj.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col w-[176px]">
                  <p className="font-Poppins font-normal text-base text-white leading-sm">
                    Legal
                  </p>
                  <ul>
                    <li className="sm:mt-3.5 mt-2.5 list-none opacity-70 hover:opacity-100 duration-300 transition-all ease-linear text-white">
                      <Link
                        aria-label="Read more about Seminole tax hike"
                        to="#condition"
                        className="font-Poppins font-normal sm:text-base text-sm leading-sm"
                      >
                        Terms and Conditions
                      </Link>
                    </li>
                    <li className="sm:mt-4 mt-2.5 list-none opacity-70 hover:opacity-100 duration-300 transition-all ease-linear text-white">
                      <Link
                        aria-label="Read more about Seminole tax hike"
                        to="#Privacy"
                        className="font-Poppins font-normal sm:text-base text-sm leading-sm"
                      >
                        Privacy Polices
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex md:justify-start justify-center gap-4 mt-8">
              {footerIcons.map((obj, index) => (
                <Link
                  aria-label="Read more about Seminole tax hike"
                  key={index}
                  to={obj.src}
                  target="_blank"
                  className="hover:scale-105 duration-300 transition-all ease-linear"
                >
                  {obj.icon}
                </Link>
              ))}
            </div>
            <div className="w-full h-[1px] bg-white sm:mt-12 mt-8"></div>
            <p className="font-Poppins font-normal sm:text-base text-sm text-white text-center text-opacity-70 leading-normal sm:py-6 py-4">
              @ All Rights Reserved {currentYear} Sherpa Property Management
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
