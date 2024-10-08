import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="banner bg-[url('/banner.svg')]">
        <div className="max-w-[1160px] py-[124px] mx-auto text-white text-center">
          <h2 className="text-5xl mb-4">Neurophysiology</h2>
          <p className="">
            Analysing your brain’s electrical activity, and investigating your
            nervous system and muscle response.
          </p>
        </div>
      </section>

      {/* I have a major problem */}

      <section className="pt-0">
        <div className="max-w-[1160px] mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-8">
            <div className="contentd ">
              <h4 className="pt-10 pb-6 text-3xl">
                Electroencephalogram | EEG
              </h4>
              <p>
                During an EEG your brainwaves are recorded on a computer. We
                analyse the frequency of brain activity and also look at the
                shape and behaviour of your brain waves.
              </p>
              <p>
                EEG’s are used to look for possible seizures, epilepsy,
                dementia, pseudo-dementia and encephalopathies.
              </p>
              <p>
                An EEG can last between 20 minutes – 24 hours, depending on a
                few things. It’s a completely non-evasive process. Leads are
                attached to your scalp with a gel–like substance, and is
                removable by washing your hair.
              </p>
            </div>
            <Image
              src={"/assets/images/Electroencephalogram-.jpeg"}
              width={1000}
              height={1000}
              alt=""
              className="rounded-md shadow-md order-2 md:order-1"
            />
          </div>
        </div>
      </section>

      <section className="egg bg-gray-100 pb-10 mb-10 mt-8">
        <div className="max-w-[1160px] mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <Image
              src={"/assets/images/Electromyography.jpg"}
              width={1000}
              height={1000}
              alt=""
              className="rounded-md shadow-md order-2 md:order-1"
            />
            <div className="order-1 md:order-2">
              <h4 className="pt-10 pb-6 text-3xl">
                Nerve conduction studies and electromyography | EMG
              </h4>
              <p>We use these tests to look for motor neurone conditions. </p>
              <p>
                During examination we test how adequately your nerves can
                transmit impulses. Using a needle we can let a small electric
                current pass through a specific nerve. Your nerve activity gets
                displayed on a screen in the form of waves.
              </p>
              <p>
                We’ll test the nerves once while your muscle is relaxed, and
                once while it is contracted.
              </p>
              <p>
                If your waves are not showing normal, it could be a sign of
                either muscle disease or nerve disease.
              </p>
              <p>
                Lower motor neuron conditions are caused by nerve, nerve root or
                muscle disorders. Upper motor neuron conditions by brain and
                spinal cord disorders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
