import AboutMe from "../AboutMe/AboutMe";
import Snippets from "../Snippets/Snippets";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Works from "../Works/Works";

const RightColumn = ({ featuredProjects, snippets }) => {
  return (
    <div className="absolute right-0 top-0 md:w-[736px] max-w-3xl mt-16 flex flex-col gap-20">
      <FeaturedProjects projects={featuredProjects} />
      <AboutMe />
      <Works />
      <Snippets snippets={snippets} />
    </div>
  );
};

export default RightColumn;
