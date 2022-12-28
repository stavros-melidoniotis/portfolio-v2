import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutYou = () => {
  const [visitorInfo, setVisitorInfo] = useState();
  const [showVisitorInfo, setShowVisitorInfo] = useState(false);

  const navigator = window.navigator;

  console.log(navigator);

  return (
    <section id="about-you">
      <SectionTitle title="About you" />

      <button
        className="text-light-gray"
        onClick={() => setShowVisitorInfo(true)}
      >
        Wait, what do you mean "about you"?
      </button>

      {showVisitorInfo ? (
        <>
          <p className="text-light-gray mt-8 mb-4">
            You're a smart person. You care.
          </p>

          <p className="text-light-gray">
            You're sitting in front of your Linux box. Perhaps feeling like a
            little bit less of a hacker all of a sudden. You also wonder how I
            know you are in Canada. Maybe a lucky guess? <br />
            You squint at your Chrome browser and wonder... is he watching me?
            But don't worry. I don't know who you are and I don't know you're in
            Toronto.
          </p>

          <p className="mt-4 text-light-gray">
            I am so glad you decided to visit my website. You're awesome.
          </p>
        </>
      ) : null}
    </section>
  );
};

export default AboutYou;
