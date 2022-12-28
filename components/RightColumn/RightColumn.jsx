import AboutMe from "../AboutMe/AboutMe";
import AboutYou from "../AboutYou/AboutYou";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";

const RightColumn = () => {
  return (
    <div className="absolute right-0 top-0 md:w-[736px] max-w-3xl mt-24 flex flex-col gap-20">
      <FeaturedProjects />
      <AboutMe />
      <AboutYou />

      <section id="projects" className="min-h-screen">
        Projects
      </section>
    </div>
  );
};

export default RightColumn;
