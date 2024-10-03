import React from "react";
import "./style.css";

const Banner1 = () => {
  return (
    <div className="">
      <section className="full-width-split-screen banner">
        <div className="">
          <h1 className="banner-title text-[33px] leading-[36.3px] font-bold uppercase px-8 sm:px-16 md:px-0 mb-4">
            Personalised neurology care with impact
          </h1>
          <p className="banner-sub leading-[20px] text-[20px] font-[20px] px-8 sm:px-16 md:px-0">
            Focused on delivering neurology care that enhances your life
          </p>
          <a
            href="contact"
            className="banner-btn  button mt-8 px-24 sm:px-16 md:px-0"
          >
            Book an appointment
          </a>
        </div>
        <img
          src="/assets/brain-in-hands.jpg"
          className="rounded-none md:rounded-l-xl shadow-sm"
          alt=""
        />
      </section>
    </div>
  );
};

export default Banner1;
