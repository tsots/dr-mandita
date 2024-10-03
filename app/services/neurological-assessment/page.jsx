import React from "react";
import Image from "next/image";
import serv from "./services.json";
import ServicesItem from "./ServiceItem";

const page = () => {
  return (
    <>
      <section id="services" className="banner bg-[url('/banner.svg')]">
        <div className="max-w-[1160px] py-[124px] mx-auto text-white text-center">
          <h2 className="text-5xl mb-4">Neurological assessment</h2>
          <p className="">
            Screening your neurological health and investigating your symptoms
            or causes of concern.
          </p>
          <h4>Your first neurological assessment</h4>
        </div>
      </section>

      <section className="min-w-full">
        <div className="max-w-[1160px] mx-auto">
          <h4>Your first neurological assessment</h4>
          <ol>
            <li>
              First, we go through a few detailed questions to get a better
              understanding of the issues you’re facing.
            </li>
            <li>
              Next we’ll perform a neurological screening. If we can diagnose a
              problem, we’ll also discuss possible treatment options.
            </li>
            <li>
              If nothing can be diagnosed because further tests are needed, then
              we’ll order these investigations. Possible investigations include
              blood tests, x-rays and a CT scan or an MRI.
            </li>
          </ol>
        </div>
        <Image
          src={"/assets/images/Medical-Exam.jpg"}
          width={1000}
          height={1000}
          alt=""
        />
      </section>

      <section className="grid grid-cols-3 gap-24 max-w-[1160px] mx-auto py-10">
        <ServicesItem />
      </section>

      <section className="follow-up bg-red-100 flex items-center h-60">
        <div className="flex items-center gap-24 max-w-[1160px] mx-auto">
          <h4 className="flex-0">Your follow up visit</h4>
          <p className="flex-1">
            When you come back we’ll discuss your response to treatments and
            look at presenting results. Then, an examination is performed to
            determine if symptoms are progressing. From this we’ll discuss
            further possible options for your treatment.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
