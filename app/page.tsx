"use client";
import { useState, useEffect } from "react";
import Banner1 from "@/components/banner/Banner1";
import About from "@/components/about/About";
import Blogs from "@/components/blogs/Blogs";
import Services from "@/components/services/Services";

const page = () => {
  // const [open, setOpen] = useState(false);
  // const close = () => {
  //   setOpen((open) => !open);

  //   setTimeout(() => {}, 2000);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(true);
  //   }, 2000);
  // }, []);

  const [open, setOpen] = useState(true);

  // when pop-up is closed this function triggers
  const close = () => {
    // setting key "seenPopUp" with value true into localStorage
    localStorage.setItem("seenPopUp", "seenPopUp");
    // setting state to false to not display pop-up
    setOpen(false);
  };

  // the useEffect to trigger on first render and check if in the localStorage we already have data about user seen and closed the pop-up
  useEffect(() => {
    // getting value of "seenPopUp" key from localStorage
    let returningUser = localStorage.getItem("seenPopUp");
    // if it's not there, for a new user, it will be null
    // if it's there it will be boolean true
    // setting the opposite to state, false for returning user, true for a new user
    setOpen(!returningUser);
  }, []);

  return (
    <>
      <Banner1 />
      <div className="" onClick={close}>
        {open ? <Modal /> : ""}
      </div>
      {/* <About /> */}
      <Services />
      <Blogs />
    </>
  );
};

const Modal = () => {
  return (
    <div className="absolute Modal mt-[-50%] bg-[url('/banner.svg')] z-100 max-w-[50vw] translate-x-[50%] translate-y-[50%] p-8 rounded-lg text-white">
      <h2 className="text-3xl mb-4">
        Address Details <br />
        <small>Our address details are:</small>
        <span className="bg-black top-9 absolute right-5 rounded-full w-6 h-6 flex justify-center items-center text-xs font-extrabold cursor-pointer">
          X
        </span>
      </h2>
      <p className="text-slate-300">
        Announcement!!! We are excited to announce that our practice has
        relocated to Netcare Milpark Hospital. We would like to take this
        opportunity to thank each one of you for your loyalty, patience and
        understanding during this transition. We hope to see you soon.
      </p>
      <p className="mt-12 text-xl mb-4">
        Netcare Milpark Hospital Level 5 <br /> Room 501 (Sessional Rooms){" "}
        <br />9 Guild Road <br />
        Parktown Johannesburg 2193
      </p>
      <div className="button mt-2 cursor-pointer">Got it</div>
    </div>
  );
};

export default page;

// SENTRY_AUTH_TOKEN=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
// onClick={() => table.nextPage()}
