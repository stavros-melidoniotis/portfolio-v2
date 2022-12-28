const Skill = ({ name }) => {
  return <div className="border border-[#FB5651] p-2 rounded-md"> {name} </div>;
};

const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "PHP",
    "C#",
    "Python",
    "Git",
    "Java",
    "Wordpress",
    "tailwindcss",
    "Node.js",
    "Next.js",
    "Docker",
    "Kotlin",
    "Firebase",
    "NestJS",
    "SQL",
    "NoSQL",
    "Linux",
  ].map((skill) => {
    return <Skill key={skill} name={skill} />;
  });

  return <div className="flex flex-wrap gap-4 my-8"> {skills} </div>;
};

export default Skills;
