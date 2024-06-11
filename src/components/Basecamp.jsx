import React from "react";
import { Privacy } from "./common/Icon";

const Basecamp = () => {
  return (
    <div className="max-w-[1180px] mx-auto px-5">
      <h2 className="font-Raleway font-bold text-4xxl text-rich-black leading-md text-center">
        Beyond the Basecamp
      </h2>
      <p className="font-Poppins font-normal text-base text-rich-black text-opacity-70 text-center leading-normal pt-4">
         Programs to Ensure Your Success
      </p>
      <div className="mt-[60px]">
        <div className="max-w-[364px] min-h-[290px] h-full bg-white rounded-xl shadow-basecamp px-[25px] py-10 border border-opacity-[16%] border-black hover:shadow-basecampHover hover:border-white duration-300 transition-all ease-linear cursor-pointer">
          <div className="flex justify-center">
            <Privacy />
          </div>
          <h3 className="font-Poppins font-semibold text-xl text-black text-center leading-normal pt-8">
            1 Year Tenant Guarantee
          </h3>
          <p className="font-Poppins font-normal text-base text-rich-black text-opacity-70 text-center leading-normal pt-2">
             If a tenant doesn’t make it through their 1st year we’ll find your
            next tenant for free
          </p>
        </div>
      </div>
    </div>
  );
};

export default Basecamp;
