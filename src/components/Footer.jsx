import React from "react";
import mountain from "../assets/images/png/mountain.png";
import { footerIcons, footerLinks } from "./common/Helper";
import { Logo } from "./common/Icon";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <img src={mountain} alt="mountain" className="-mb-0.5" />
      <div className="bg-dark-green">
        <div className="max-w-[1180px] mx-auto px-5 sm:pt-[67px] pt-12">
          <div className="flex md:flex-row flex-col gap-10">
            <div className="flex flex-col">
              <Link to="/" className="flex justify-center md:justify-start">
                <Logo />
              </Link>
              <p className="font-Poppins font-normal sm:text-base text-sm text-white md:max-w-[500px] text-opacity-70 md:text-start text-center leading-sm pt-5">
                Sherpa Property Management is a full service property management
                company handling the daily management of the property, tenant
                relations, maintenance of the property, property accounting,
                rental licensing & lead paint certificates
              </p>
            </div>
            <div className="flex md:justify-end justify-center lg:gap-20 sm:gap-16 gap-12 md:ms-auto">
              <div className="flex flex-col w-[89px]">
                <p className="font-Poppins font-normal text-base text-white leading-sm">
                  Quick links
                </p>
                {footerLinks.map((obj, index) => (
                  <li
                    key={index}
                    className="flex flex-col gap-4 mt-4 opacity-70 hover:opacity-100 duration-300 transition-all ease-linear text-white"
                  >
                    <Link
                      to={obj.src}
                      className="font-Poppins font-normal sm:text-base text-sm leading-sm"
                    >
                      {obj.title}
                    </Link>
                  </li>
                ))}
              </div>
              <div className="flex flex-col w-[176px]">
                <p className="font-Poppins font-normal text-base text-white leading-sm">
                  Legal
                </p>
                <li className="pt-4 list-none opacity-70 hover:opacity-100 duration-300 transition-all ease-linear text-white">
                  <Link
                    to="#condition"
                    className="font-Poppins font-normal sm:text-base text-sm leading-sm"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li className="pt-4 list-none opacity-70 hover:opacity-100 duration-300 transition-all ease-linear text-white">
                  <Link
                    to="#Privacy"
                    className="font-Poppins font-normal sm:text-base text-sm leading-sm"
                  >
                    Privacy Polices
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="flex md:justify-start justify-center gap-4 mt-8">
            {footerIcons.map((obj, index) => (
              <Link
                key={index}
                to={obj.src}
                target="_blank"
                className="hover:-translate-y-2 duration-300 transition-all ease-linear"
              >
                {obj.icon}
              </Link>
            ))}
          </div>
          <div className="w-full h-[1px] bg-white sm:mt-12 mt-10"></div>
          <p className="font-Poppins font-normal sm:text-base text-sm text-white text-center text-opacity-70 leading-normal sm:py-6 py-4">
            @ All Rights Reserved {currentYear} Sherpa Property Management
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
