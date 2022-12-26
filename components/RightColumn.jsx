import FeaturedProject from "./FeaturedProject";

const RightColumn = () => {
  return (
    <div className="absolute right-0 top-0 md:w-[736px] max-w-3xl mt-24 h-[3000px]">
      <section id="home" className="grid grid-cols-2 gap-6 h-screen">
        <FeaturedProject
          title="efood-order-tracker"
          description="Chrome extension that keeps track of time for your e-food orders."
          link="https://github.com/stavros-melidoniotis/efood-order-tracker"
          stars={5}
          language="JavaScript"
        />
        <FeaturedProject
          title="isup-cli"
          description="A cli tool to quickly test whether websites are up and running."
          link="https://github.com/stavros-melidoniotis/isup-cli"
          stars={3}
          language="JavaScript"
        />
        <FeaturedProject
          title="messengram"
          description="Messenger and Instagram combined under a single cross-platform app."
          link="https://github.com/stavros-melidoniotis/messengram"
          stars={2}
          language="JavaScript"
        />
        <FeaturedProject
          title="ig-tagger"
          description="Python script that automates the process of tagging people in Instagram giveaways."
          link="https://github.com/stavros-melidoniotis/ig-tagger"
          stars={6}
          forks={2}
          language="Python"
        />
        <FeaturedProject
          title="wear-os-eortologio"
          description="Wear OS app that shows the celebrating names of each day."
          link="https://github.com/stavros-melidoniotis/wear-os-eortologio"
          stars={2}
          language="Kotlin"
        />
        <FeaturedProject
          title="bank-transactions-web-ui"
          description="A simple dashboard to view monthly analytics of my bank transactions."
          link="https://github.com/stavros-melidoniotis/bank-transactions-web-ui"
          stars={2}
          language="JavaScript"
        />
      </section>

      <section id="about-me"> About me </section>
      <section id="about-you"> About you </section>
      <section id="projects"> Projects </section>
    </div>
  );
};

export default RightColumn;
