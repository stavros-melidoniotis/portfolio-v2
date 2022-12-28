import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";

const AboutMe = () => {
  return (
    <section id="about-me" className="min-h-screen">
      <p className="text-light-gray mb-8">
        I would describe myself as a passionate, detail-oriented individual with
        a get-it-done, on-time and high-quality-product spirit. I&apos;m always
        keen on learning new stuff and experimenting with new technologies in
        the areas of Web Development and AI.
      </p>

      <h2 className="mb-6 text-light-gray">
        Here are some important milestones in my life so far...
      </h2>

      <Timeline />

      <h2 className="mb-4 text-light-gray">
        Technical skills (don't worry if a skill is missing – I pick things up
        pretty quick):
      </h2>

      <Skills />

      <p className="text-light-gray">
        I have experience working on a team in an agile environment using
        Atlassian software, but I also enjoy working independently.
      </p>
    </section>
  );
};

export default AboutMe;
