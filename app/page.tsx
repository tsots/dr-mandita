import React from "react";
import Banner1 from "@/components/banner/Banner1";
import About from "@/components/about/About";
import Blogs from "@/components/blogs/Blogs";
import Services from "@/components/services/Services";
const page = () => {
  return (
    <>
      <Banner1 />
      <About />
      <Services />
      <Blogs />
    </>
  );
};

export default page;
