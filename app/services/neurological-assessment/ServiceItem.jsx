import React from "react";
import services from "./services.json";
import Image from "next/image";

const ServiceItem = () => {
  return (
    <>
      {services.map((service) => (
        <div className="pt-16">
          <h4 className="text-xl uppercase font-bold mb-4">{service.name}</h4>
          <p className="mb-4">{service.content}</p>
          <Image
            src={service.image}
            width={500}
            height={500}
            alt=""
            className="object-cover"
          />
        </div>
      ))}
    </>
  );
};

export default ServiceItem;
