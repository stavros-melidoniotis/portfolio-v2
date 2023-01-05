import { motion } from "framer-motion";

const Skill = ({ name }) => {
  return (
    <motion.div
      className="border border-[#FB5651] p-2 rounded-md"
      initial={{ opacity: 0, y: "60px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      viewport={{
        margin: "-100px",
        once: true,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {name}
    </motion.div>
  );
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
  ].map((skill, index) => {
    return <Skill key={index} name={skill} />;
  });

  return <div className="flex flex-wrap gap-4 my-8"> {skills} </div>;
};

export default Skills;
