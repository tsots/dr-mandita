import "./styles.scss";

const page = () => {
  return (
    <div id="stroke-dont-be-a-statistic" className="wrapper">
      <section className="bg-[url('/banner.svg')]">
        <div className="max-w-[1160px] py-[124px] mx-auto text-white text-center">
          <h2 className="text-5xl mb-4">Stroke! Don’t be a statistic</h2>
          <p className="">
            I have a passion for improving people’s quality of life, so my
            mission is to uphold excellence in neurology and brain health.
          </p>
        </div>
      </section>
      <div className="pt-20 pb-10">
        <div className="heading">
          <h4>
            <span className="date">06 Jun</span> Stroke! Don’t be a statistic
          </h4>
          <div className="content">
            <p>
              According the world health organisation, stroke is the second most
              common cause of death after ischaemic heart disease worldwide.
            </p>
            <p>
              Stroke is a neurological deficit that occurs suddenly. It occurs
              when perfusion to the brain is interrupted by either a thrombus
              (clot in the blood vessels of the brain), embolism (a clot that
              migrated from elsewhere in the to the brain) and intracerebral
              bleeding.
            </p>
            <p>
              There is usually no immediate forewarning and the severity of the
              neurological deficit is determined by the brain area that is
              hypo-perfused. The best way to avoid a stroke is by managing risk
              factors one might have. Risk factors that can be modified include
              hypertension, diabetes, hypercholesterolaemia, heart disease,
              smoking, alcohol (alcohol intake beyond a glass a day) and
              physical inactivity.
            </p>

            <div>
              <h6>Risk factors that cannot be modified are:</h6>
              <p>
                <strong>Age</strong> – greater than 55.
              </p>
              <p>
                <strong>Race</strong> – incidence is higher in black people.
              </p>
              <p>
                <strong>Sex</strong> – at certain age groups, men are higher
                risk of having a stroke.
              </p>
              <p>
                <strong>Genetics</strong> – inherited conditions predisposing to
                stroke.
              </p>
            </div>

            <p>
              A stroke study declared that the risk of stroke is significantly
              increased when one has two or more risk factors. Lifestyle
              modification can literally protect you from a stroke and can help
              prevent a recurrent stroke in those who have already had one.
            </p>

            <p>
              Dedicate 30 minutes of your 24 hours to some cardiovascular
              exercise, adopt a low cholesterol diet, stop smoking and keep an
              eye on your hypertension and diabetes. These changes can save your
              life.
            </p>

            <p>
              What are your risk factors and what are YOU doing to modify them?
            </p>

            <p>Yours in brain health,</p>

            <p>
              <strong>Dr V Mandita</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
