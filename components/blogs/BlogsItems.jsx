import Image from "next/image";

const ServicesItems = ({ blog }) => {
  console.log(blog);
  return (
    <div className="card grid max-w-96 bg-slate-900 mx-auto pb-8">
      <Image
        src={blog.image}
        width={1000}
        height={1000}
        alt=""
        className="mb-[16px]"
      />
      <h4 className="mb-4 text-[23px] px-4 font-semibold">{blog.name}</h4>
      <p className="mb-[28px] text-[18px] leading-[150%] px-4 ">
        {blog.excerpt}
      </p>
      <a href={blog.link}>
        <button className="bg-[#B8812E] py-[8px] px-[16px] mt-[24px] flex justify-center items-center text-[18px] ml-4 rounded-lg">
          Read more
        </button>
      </a>
    </div>
  );
};

export default ServicesItems;
