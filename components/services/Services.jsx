import "./styles.scss";
import ServicesItems from "./ServicesItems";

const services = [
  {
    id: 1,
    name: "Neurological Assessment",
    excerpt:
      "During a neurological assessment we do a thorough physical examination and conduct a medical history review.",
    image: "/assets/images/Neurological-Assessment.jpg",
    link: "/services/neurological-assessment",
  },
  {
    id: 2,
    name: "Neurophysiology",
    excerpt:
      "With an EEG or EMG we record and analyse your brain’s electrical activity, and investigate your muscle response through nerve conduction studies.",

    image: "/assets/images/Neurophysiology.jpg",
    link: "/services/neurophysiology",
  },
  {
    id: 3,
    name: "Medical Botox",
    excerpt:
      "Botox is used to treat various neurological problems that cause muscle disorders and other medical health issues.",
    image: "/assets/images/Medical-Botox.jpg",
    link: "/services/medical-botox",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="services-container px-[16px] bg-[#090706] py-[124px] text-white"
    >
      <div className="mx-auto max-w-[1160px]">
        <h4 className="text-[32px] text-white font-bold text-center mb-9 uppercase">
          DR Mandita's &nbsp;
          <span className="text-[#B8812E] underline-offset-3 underline">
            services
          </span>
        </h4>
        <div className="services-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-8 justify-center lg:justify-between mx-auto">
          {services.map((service) => (
            <ServicesItems service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
