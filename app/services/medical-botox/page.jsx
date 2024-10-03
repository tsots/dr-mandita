import React from "react";
import Image from "next/image";
import lala from "@/public/assets/brain-in-hands.jpg";

const page = ({ title, icon }) => {
  return (
    <div>
      <section className="banner bg-[url('/banner.svg')]">
        <div className="max-w-[1160px] py-[124px] mx-auto text-white text-center">
          <h2 className="text-5xl mb-4">Neurological assessment</h2>
          <p className="">
            Screening your neurological health and investigating your symptoms
            or causes of concern.
          </p>
          <h4>Your first neurological assessment</h4>
        </div>
      </section>
      <section className="cards w-full py-[124px] bg-[#F8F3F1]">
        <div className="max-w-[1160px] flex mx-auto flex-row-reverse gap-5">
          <Image
            src="/assets/images/Dystonia.jpg"
            width={600}
            height={400}
            alt=""
          />
          <div className="content">
            <Card
              title="dystonia"
              content="This is a type of neurological movement disorder. When you have it, certain muscles in your body contracts involuntarily. This can either affect a specific part of your body, different parts at the same time or your whole body."
            />
            <ul className="mt-4">
              <h6>Most common areas that are affected by dystonia include:</h6>
              <li>Neck</li>
              <li>Eyelids</li>
              <li>Jaw or Tongue</li>
              <li>Vocal Cords</li>
              <li>Hands and Forearms</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cards w-full py-[124px] bg-[#090706] text-white">
        <div className="max-w-[1160px] mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <Image
              src={"/assets/images/Blepharospasm.jpg"}
              width={1000}
              height={1000}
              alt=""
            />
            <Card
              title="Blepharospasm"
              content="This is a fairly rare disease and is identified by abnormal contraction or twitching of the eyelids. Symptoms of blepharospasm can vary from mild to severe, disappear for days at a time or continuing persistently. Blepharospasm can also be referred to as focal dystonia, because the muscles around your eyes are contracting involuntarily"
            />
          </div>
        </div>
      </section>
      <section className="cards w-full py-[124px]">
        <div className="max-w-[1160px] mx-auto">
          <div className="flex mx-auto gap-5">
            <Image
              src={"/assets/images/Spasticity.jpg"}
              width={570}
              height={380}
              alt=""
            />
            <Card
              title="Spasticity"
              content="Spasticity is also a condition in which some muscles in your body contract involuntarily. However spasticity is mostly caused by brain or spinal cord damage, strokes, meningitis or encephalitis (inflammation of the brain). Patients with Cerebral Palsy or Multiple Sclerosis may also suffer from spasticity. Besides muscle contraction, muscle fatigue, stiffness and pain, spasticity can also cause urinary tract infections, chronic constipation, fever or other systemic illnesses and pressure sores."
            />
          </div>
        </div>
      </section>

      <section className="cards w-full pt-[80px] pb-[40px] bg-[#f9f9f9]">
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-0">
          <Card
            title="Hyperhidrosis"
            content="Hyperhidrosis is excessive sweating. Even though it is not necessarily a health risk nor does it affect the functioning ability of your muscles, it’s an embarrassing problem that can affect your day-to-day life. This excessive sweating is not only caused by physical activity, but can also be triggered by slight heat change, anxiety and other emotions. Sometimes hyperhidrosis is a symptom caused by other health issues such as diabetes, menopause, thyroid problems or low blood sugar."
          />
          <Image
            src={"/assets/images/Hyperrhidrosis.jpg"}
            width={1000}
            height={1000}
            alt=""
            className="rounded-xl shadow-gray-900 drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default page;

const Card = ({ title, icon, content }) => {
  return (
    <>
      <div className="">
        <div className="content">
          <h4 className="text-4xl uppercase font-semibold">{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};
