import AboutMe from "../AboutMe/AboutMe";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";

const RightColumn = () => {
  return (
    <div className="absolute right-0 top-0 md:w-[736px] max-w-3xl mt-24 flex flex-col gap-20">
      <FeaturedProjects />
      <AboutMe />
      <section id="about-you" className="min-h-screen">
        {" "}
        About you{" "}
      </section>
      <section id="projects" className="min-h-screen">
        {" "}
        Projects{" "}
      </section>
    </div>
  );
};

export default RightColumn;
