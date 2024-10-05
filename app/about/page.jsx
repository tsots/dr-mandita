import Image from "next/image";
import "./styles.scss";

const page = () => {
  return (
    <div id="about-page" className="">
      <section className="bg-[url('/banner.svg')]">
        <div className="max-w-[1160px] py-[124px] mx-auto text-white text-center">
          <h2 className="text-5xl mb-4">
            About <br /> Dr. V. Mandita
          </h2>
          <p className="">
            I have a passion for improving people’s quality of life, so my
            mission is to uphold excellence in neurology and brain health.
          </p>
        </div>
      </section>

      <section className="bio pb-12 md:pb-32">
        <div className="max-w-[1160px] mt-[-50px] justify-center mx-auto bio-content grid grid-cols-1 md:grid-cols-2 gap-8 px-8 lg:px-">
          <div className="image flex justify-center">
            <Image
              src={"/assets/images/dr-mandita-profile-picture.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="rounded-xl max-w-[400px] md:max-w-[100%]"
            />
          </div>
          <div className="content mt-20 0">
            <h4 className="text-5xl mb-6">Dr Mandita</h4>
            <p className="">
              I have a passion for improving people’s quality of life, so my
              mission is to uphold excellence in neurology and brain health.
              Neurology requires a patient-centred approach. It’s an intricate
              speciality, so time spent with each one of my patients is of
              utmost importance. I am a firm believer in healing the whole
              person – not just the disease.
            </p>
          </div>
        </div>
      </section>

      <section className="appraisal pb-10 px-8 xl:px-0">
        <div className="max-w-[1160px] mx-auto grid  grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_dPTaeGX4no?si=eHEFgYEXtwwmOk9g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="px-8 lg:px-0 order-2"
          ></iframe>
          <p className="order-1">
            Neurologist Dr Mandita completed her Bachelor of Medicine and
            Surgery (MBChB) at the University of KwaZulu-Natal, Durban. In 2016
            she became a qualified neurologist through the Colleges of Medicine
            South Africa (CMSA) Dr Mandita further obtained her MMed in
            Neurology from Sefako Makgato Health Sciences University (previously
            known as Medunsa) in 2017. Her Master’s degree research topic was on
            Cavernous Sinus Thrombosis and its Mortality and Morbidity in the
            South African Setting. Prior to specialising, she gained clinical
            research experience in drug resistant tuberculosis and had a tenure
            in the pharmaceutical industry. Her special interests include
            movement disorders, especially Parkinson’s Disease and Huntington’s
            Disease, as well as epilepsy and headaches.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
