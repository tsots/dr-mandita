import React from "react";
import "./style.scss";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="content max-w-[33%] text-6xl flex items-center">
          <h1 className="text-white">
            Personalised neurology care with impact
          </h1>
        </div>
        <div className="image welcome flex items-center justify-self-center">
          <Image
            src="/assets/brain-in-hands.jpg"
            height={624}
            width={802}
            className="welcome object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
