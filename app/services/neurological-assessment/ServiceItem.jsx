import React from "react";
import services from "./services.json";
import Image from "next/image";

const ServiceItem = () => {
  return (
    <>
      {services.map((service) => (
        <div className="pt-4 rounded-xl shadow-sm hover:shadow-md bg-gray-100 max-w-[400px] mx-auto">
          <h4 className="text-xl uppercase font-bold mb-4 px-4">
            {service.name}
          </h4>
          <Image
            src={service.image}
            width={500}
            height={500}
            alt=""
            className="object-cover"
          />
          <p className="mb-4 mt-4 px-4">{service.content}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceItem;
