import "../stroke/styles.scss";

const page = () => {
  return (
    <div id="stroke-dont-be-a-statistic" className="wrapper">
      <section className="bg-[url('/banner.svg')]">
        <div className="max-w-[1160px] py-[124px] mx-auto text-white text-center">
          <h2 className="text-5xl mb-4">
            Migraine headaches, don’t just pop a pill!
          </h2>
          <p className="">
            I have a passion for improving people’s quality of life, so my
            mission is to uphold excellence in neurology and brain health.
          </p>
        </div>
      </section>
      <div className="pt-20 pb-10">
        <div className="heading">
          <h4>
            <span className="date">03 Jun</span> Migraine headaches, don’t just
            pop a pill! <br />
            <small className="text-sm text-gray-400 mt-[-10px]">
              Posted at 19:26h in Uncategorized by Dr.Mandita
            </small>
          </h4>

          <div className="content">
            <p>
              There are various effective pharmacological treatment options for
              these headaches which include prophylactic therapy as well as
              rescue therapy. However, certain lifestyle changes can have an
              additive effect on treatment and may even reduce the dose
              requirements together with headache frequency and severity.
            </p>
            <p>
              These include simple things such as exercise, stopping caffeine
              (and cocoa for that matter!), smoking cessation, avoidance of
              passive smoke, getting enough sleep and eating small healthy
              frequent meals. Heard this before? Off course! When it comes to
              migraines, start with the basics.
            </p>
            <p>
              One should also identify and avoid their trigger factors for one’s
              headaches. These can differ between individuals. A simple way to
              identify these trigger factors would be to do something as simple
              as keeping a headache diary that one can look at over time as
              trigger factors become clearer in retrospect. Like they say,
              hindsight is 20/20 vision!
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
