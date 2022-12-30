import AboutMe from "../AboutMe/AboutMe";
import Snippets from "../Snippets/Snippets";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Works from "../Works/Works";

const RightColumn = ({ featuredProjects, snippets }) => {
  return (
    <div className="relative lg:absolute lg:right-10 lg:top-0 lg:w-[736px] lg:max-w-xl xl:max-w-3xl mt-8 xl:mt-16 flex flex-col gap-20">
      <FeaturedProjects projects={featuredProjects} />
      <AboutMe />
      <Works />
      <Snippets snippets={snippets} />
    </div>
  );
};

export default RightColumn;
