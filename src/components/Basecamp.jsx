import React from "react";
import { basecamp } from "./common/Helper";

const Basecamp = () => {
  return (
    <div className="max-w-[1180px] mx-auto px-5 lg:py-24 md:py-20 sm:py-16 py-12">
      <h2 className="font-Raleway font-bold md:text-4xxl sm:text-4xl xs:text-3xl text-2xl text-rich-black leading-md text-center">
        Beyond the Basecamp
      </h2>
      <p className="font-Poppins font-normal sm:text-base text-sm text-rich-black text-opacity-70 text-center leading-normal xs:pt-4 pt-2">
         Programs to Ensure Your Success
      </p>
      <div className="md:mt-[60px] mt-10">
        <div className="flex flex-wrap gap-6 justify-center">
          {basecamp.map((obj, index) => (
            <div
              key={index}
              className="lg:max-w-[364px] md:max-w-[352px] max-w-[480px] w-full md:min-h-[290px] xs:min-h-[195px] min-h-[218px] h-full bg-white rounded-xl shadow-basecamp md:px-[25px] md:py-10 p-6 border border-opacity-[16%] border-black hover:shadow-basecampHover hover:border-white duration-300 transition-all ease-linear cursor-pointer"
            >
              <div className="flex justify-center">{obj.icon}</div>
              <h3 className="font-Poppins font-semibold sm:text-xl text-lg text-black text-center leading-normal md:pt-8 pt-5">
                {obj.title}
              </h3>
              <p className="font-Poppins font-normal sm:text-base text-sm text-rich-black text-opacity-70 text-center leading-normal pt-2">
                {obj.discription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basecamp;
