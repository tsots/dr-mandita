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

      <section className="min-w-full bg-gray-100 ">
        <div className="max-w-[1160px] mx-auto items-center grid grid-cols-1 md:grid-cols-2 py-20 gap-8">
          <Image
            src={"/assets/images/MedicalExam.jpg"}
            width={1920}
            height={1080}
            alt=""
            className="rounded-xl shadow-md"
          />
          <div className="content grid">
            <h4 className="text-2xl font-bold">
              Your first neurological assessment
            </h4>
            <ol className="grid gap-1">
              <li>
                First, we go through a few detailed questions to get a better
                understanding of the issues you’re facing.
              </li>
              <li>
                Next we’ll perform a neurological screening. If we can diagnose
                a problem, we’ll also discuss possible treatment options.
              </li>
              <li>
                If nothing can be diagnosed because further tests are needed,
                then we’ll order these investigations. Possible investigations
                include blood tests, x-rays and a CT scan or an MRI.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[1160px] mx-auto py-10 px-8 xl:px-0">
          <ServicesItem />
        </div>
      </section>

      <section className="follow-up bg-red-100 flex items-center h-60">
        <div className="flex items-center gap-24 max-w-[1160px] mx-auto px-8 xl:px-0">
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
