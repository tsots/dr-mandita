import Image from "next/image";

const ServicesItems = ({ service }) => {
  return (
    <div className="card rounded-lg max-w-96 bg-[#221A16] grid py-[32px] mx-auto">
      <h4 className="mb-4 text-[23px] pl-4 bold">{service.name}</h4>
      <Image
        src={service.image}
        width={372}
        height={470}
        alt=""
        className="mb-[32px]"
      />
      <p className="mb-[28px] text-[18px] leading-[150%] px-4 ">
        {service.excerpt}
      </p>
      <a href={service.link}>
        <button className="bg-[#B8812E] text-white py-[8px] px-[16px] mt-[24px] flex justify-center items-center text-[18px] ml-4 rounded-lg">
          Read more
        </button>
      </a>
    </div>
  );
};

export default ServicesItems;
