import Timeline from "../Timeline/Timeline";

const AboutMe = () => {
  return (
    <section id="about-me" className="min-h-screen">
      <p className="text-light-gray mb-8">
        I would describe myself as a passionate, detail-oriented individual with
        a get-it-done, on-time and high-quality-product spirit. I discovered my
        passion for programming a few years ago and since then I can't get
        enough of it. I&apos;m always keen on learning new stuff and
        experimenting with new technologies in the areas of Web Development and
        AI.
      </p>

      <h2 className="mb-4 text-light-gray">
        Here's a glimpse of my story so far:
      </h2>

      <Timeline />

      <h2 className="mb-4 text-light-gray">
        Some of the skills that I've acquired from my journey so far:
      </h2>

      <p className="text-light-gray">
        I have experience working on a team in an agile environment using
        Atlassian software, but I also enjoy working independently. Don't worry
        if a skill is missing – I pick things up pretty quick.
      </p>
    </section>
  );
};

export default AboutMe;
