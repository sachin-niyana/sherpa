import React, { useState } from "react";
import { Play } from "./common/Icon";
import thumbnail from "../assets/images/png/thumbnail.png";
import video from "../assets/videos/world.mp4";

export const VideoTutorial = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handlePauseVideo = () => {
    setIsPlaying(false);
  };
  return (
    <div className="max-w-[1180px] mx-auto px-5 lg:pt-0 lg:pb-[140px] md:py-20 sm:py-16 py-12">
      <h2 className="font-Raleway font-bold md:text-4xxl sm:text-4xl xs:text-3xl text-2xl text-rich-black leading-md text-center">
        Video Tutorial
      </h2>
      <p className="font-Poppins font-normal sm:text-base text-sm text-rich-black text-opacity-70 text-center leading-normal xs:pt-4 pt-2 max-w-[572px] mx-auto">
        Lorem ipsum dolor sit amet consectetur. Suspendisse etiam massa id diam.
        Convallis nulla enim odio lorem imperdiet viverra purus tristique.
      </p>
      <div className="md:mt-12 mt-10">
        {isPlaying ? (
          <video
            className=" max-w-[623px] lg:max-w-[888px] w-full max-h-[350px] lg:min-h-[500px] rounded-[18px] mx-auto overflow-hidden"
            controls
            autoPlay
            onEnded={handlePauseVideo}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="cursor-pointer relative" onClick={handlePlayVideo}>
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="max-w-[623px] lg:max-w-[888px] w-full max-h-[350px] lg:min-h-[500px] rounded-[18px] mx-auto"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Play />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
