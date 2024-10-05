import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Contact = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="">
      {isAdmin && <PasskeyModal />}

      {/* <section className="remove-scrollbar container my-auto flex">
        <div className="sub-container max-w-[496px]">
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Dr V Mandita
            </p>
            <Link href="/contact?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section> */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-60 max-w-[1160px] mx-auto py-10">
        <PatientForm />
        <section>
          <section className="mb-12 space-y-4">
            <h1 className="header">Book an appointment</h1>
            <p className="text-dark-700">Get started by filling this form.</p>
          </section>
          <ul>
            <li>+27 (10) 597 3678</li>
            <a href="mailto:info@drmandita.co.za">
              <li>info@drmandita.co.za</li>
            </a>
            <li>Netcare Milpark Hospital</li>
            <li>Level 5 – Room 501 (Sessional Rooms)</li>
            <li>9 Guild Road</li>
            <li>Parktown</li>
            <li>Johannesburg</li>
            <li>2193</li>
          </ul>
        </section>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.2465594343284!2d28.017044310515242!3d-26.179959695449316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b8a9f1d73a5%3A0x76589ece2cee093c!2sNetcare%20Milpark%20Hospital!5e0!3m2!1sen!2sza!4v1728083113486!5m2!1sen!2sza"
          frameBorder="0"
          width="100%"
          height="500px"
          allowFullScreen
        ></iframe>
      </section>

      {/* <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      /> */}
      {/* <section>
        <ul>
          <li>+27 (10) 597 3678</li>
          <a href="mailto:info@drmandita.co.za">
            <li>info@drmandita.co.za</li>
          </a>
          <li>Netcare Milpark Hospital</li>
          <li>Level 5 – Room 501 (Sessional Rooms)</li>
          <li>9 Guild Road</li>
          <li>Parktown</li>
          <li>Johannesburg</li>
          <li>2193</li>
        </ul>
      </section> */}
    </div>
  );
};

export default Contact;
