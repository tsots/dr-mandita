import BlogsItems from "./BlogsItems";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    name: "Migraine headaches, don’t just pop a pill!",
    excerpt:
      "It is estimated that migraines affect up to 12 percent of the general population",
    image: "/assets/images/Migraines.jpg",
    link: "/blogs/migrains",
  },
  {
    id: 2,
    name: "Stroke! Don’t be a statistic",
    excerpt:
      "According the world health organisation, stroke is the second most common cause.",

    image: "/assets/images/pulse-check.jpg",
    link: "/blogs/stroke",
  },
];

const Blogs = () => {
  return (
    <section
      id="services"
      className="services-container px-[16px] bg-[#f9f9f9] py-[62px] text-white"
    >
      <div className="mx-auto max-w-[1160px]">
        <h4 className="text-[32px] mt-4 text-slate-900 font-bold text-center uppercase pb-20">
          Blog's by &nbsp;
          <span className="text-[#B8812E] underline-offset-3 underline">
            Dr Mandita
          </span>
        </h4>
        <div className="services-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-8 justify-center lg:justify-between mx-auto">
          {blogs.map((blog) => (
            <BlogsItems blog={blog} />
          ))}
        </div>
        {/* <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center lg:justify-between mx-auto">
          <div className="card max-w-[365px] grid bg-slate-900 mx-auto gap-4 text-white rounded-t-xl shadow-md shadow-slate-500 pb-4">
            <Image
              src={blogs[0].image}
              width={600}
              height={390}
              alt=""
              className="rounded-t-xl"
            />
            <div className="card_title">
              <h4 className="text-2xl">{blogs[0].name.slice(0, 10)}</h4>
            </div>
            <p className="">{blogs[0].excerpt}</p>
            <a href={blogs[0].link}>
              <button className="bg-[#B8812E] py-[8px] px-[16px] mt-[24px] flex justify-center items-center text-[18px] ml-4 rounded-lg">
                Read more
              </button>
            </a>
          </div>
          <div className="card max-w-[365px] grid bg-slate-900 mx-auto gap-4 text-white rounded-t-xl shadow-md shadow-slate-500 pb-4">
            <Image
              src={blogs[1].image}
              width={600}
              height={390}
              alt=""
              className="rounded-t-xl"
            />
            <h4 className="text-2xl">{blogs[1].name.slice(0, 10)}</h4>
            <p className="">{blogs[1].excerpt}</p>
            <a href={blogs[1].link}>
              <button className="bg-[#B8812E] py-[8px] px-[16px] mt-[24px] flex justify-center items-center text-[18px] ml-4 rounded-lg">
                Read more
              </button>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Blogs;
