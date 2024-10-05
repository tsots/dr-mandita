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

      <section className="bio">
        <div className="max-w-[1160px] mt-[-50px] mx-auto bio-content">
          <div className="image">
            <Image
              src={"/assets/images/dr-mandita-profile-picture.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="content mt-20">
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

      <section className="appraisal">
        <div className="max-w-[1160px] mx-auto">
          <p>
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
