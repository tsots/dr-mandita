import BlogsItems from "./BlogsItems";

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

    image: "/assets/images/Neurophysiology.jpg",
    link: "/blogs/stroke",
  },
];

const Blogs = () => {
  return (
    <section
      id="services"
      className="services-container px-[16px] bg-[#f9f9f9] py-[124px] text-white"
    >
      <div className="mx-auto max-w-[1160px]">
        <h4 className="text-[32px] text-slate-900 font-bold text-center uppercase pb-20">
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
      </div>
    </section>
  );
};

export default Blogs;
