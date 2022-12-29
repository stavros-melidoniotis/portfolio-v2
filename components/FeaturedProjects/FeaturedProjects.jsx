import FeaturedProject from "../FeaturedProject";

const FeaturedProjects = ({ projects }) => {
  return (
    <section id="home" className="grid grid-cols-2 gap-6 min-h-screen">
      {projects.map((project) => {
        return (
          <FeaturedProject
            key={project.id}
            title={project.name}
            description={project.description}
            link={project.url}
            stars={project.stargazers.totalCount}
            forks={project.forks.totalCount}
            language={project.primaryLanguage.name}
            languageColor={project.primaryLanguage.color}
          />
        );
      })}
    </section>
  );
};

export default FeaturedProjects;
