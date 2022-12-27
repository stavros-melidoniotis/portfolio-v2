import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import NavMenu from "../NavMenu/NavMenu";
import styles from "./LeftColumn.module.css";

import me from "../../assets/images/me.webp";

const LeftColumn = () => {
  return (
    <div className="fixed flex flex-col justify-between w-1/3 max-w-xl h-screen pt-28 pb-20">
      <div>
        <h1 className="text-6xl font-bold mb-4">
          Hello, I&apos;m <br /> Stavros Melidoniotis
          <span className={styles.wavyHand}>👋</span>
        </h1>

        <h2 className="text-3xl">I (mostly) make websites.</h2>

        <p className="text-light-gray mt-8 mb-12">
          I&apos;m a full stack developer equipped with the urge to turn ideas
          into exceptional digital experiences. Currently, I&apos;m focused on
          building accessible, human-centered products at Crowdpolicy.
        </p>

        <NavMenu />
      </div>

      <div className="flex gap-8">
        <Image width="50" src={me} alt="me" className="rounded-full" />

        <ul className="flex items-center gap-10">
          <li>
            <Link
              href="https://github.com/stavros-melidoniotis"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faGithub} />
              Github
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/stavros-melidoniotis/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              LinkedIn
            </Link>
          </li>

          <li>
            <Link
              href="mailto:melidon.stavros@gmail.com"
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftColumn;
