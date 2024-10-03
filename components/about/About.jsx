import Image from "next/image";
const About = () => {
  return (
    <>
      <section id="about" className="w-full py-[124px]  bg-slate-50">
        <div
          id="about-us"
          className="max-w-[1160px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between mx-auto h-[50%] shadow-gray-700 rounded-lg"
        >
          <div className="grid order-1 md:order-2 content-center justify-center px-4">
            <h4 className="text-[32px] font-bold text-center mb-9 uppercase">
              About{" "}
              <span className="text-[#B8812E] underline-offset-3 underline">
                DR Mandita
              </span>
            </h4>
            <div className="text-[18px] grid gap-3">
              <p className="space-y-8">
                Dr Mandita completed her Bachelor of Medicine and Surgery
                (MBChB) at the University of KwaZulu-Natal, Durban. In 2016 she
                became a qualified neurologist through the Colleges of Medicine
                South Africa (CMSA)
              </p>
              <p>
                Dr Mandita further obtained her MMed in Neurology from Sefako
                Makgato Health Sciences University (previously known as Medunsa)
                in 2017.
              </p>
              <p>
                Her Master’s degree research topic was on Cavernous Sinus
                Thrombosis and its Mortality and Morbidity in the South African
                Setting.
              </p>
              <p>
                Prior to specialising, she gained clinical research experience
                in drug resistant tuberculosis and had a tenure in the
                pharmaceutical industry.
              </p>
              <p>
                Her special interests include movement disorders, especially
                Parkinson’s Disease and Huntington’s Disease, as well as
                epilepsy and headaches.
              </p>
            </div>
          </div>

          <Image
            src="/assets/Dr-Mandita.png"
            width={500}
            height={500}
            className="max-w-[100%] justify-self-center lg:justify-self-end rounded-xl order-2 md:order-1"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default About;
