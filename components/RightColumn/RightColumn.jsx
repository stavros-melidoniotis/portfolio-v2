import AboutMe from "../AboutMe/AboutMe";
import AboutYou from "../AboutYou/AboutYou";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Works from "../Works/Works";

const RightColumn = ({ featuredProjects }) => {
  return (
    <div className="absolute right-0 top-0 md:w-[736px] max-w-3xl mt-16 flex flex-col gap-20">
      <FeaturedProjects projects={featuredProjects} />
      <AboutMe />
      {/* <AboutYou /> */}
      <Works />
    </div>
  );
};

export default RightColumn;
