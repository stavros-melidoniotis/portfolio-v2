import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import Spotify from "../Spotify/Spotify";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./LeftColumn.module.css";

import me from "../../assets/images/me.webp";

const LeftColumn = ({ spotifyData }) => {
  return (
    <div className="relative lg:fixed flex flex-col lg:justify-between gap-10 xl:gap-0 w-full lg:w-1/3 lg:max-w-xl lg:h-screen pt-12 xl:pt-28 pb-20">
      <div>
        <h1 className="text-4xl xl:text-6xl font-bold mb-4 font-bricolage">
          Hello, I&apos;m <br /> Stavros Melidoniotis
          <span className={styles.wavyHand}>👋</span>
        </h1>

        <h2 className="text-2xl">I (mostly) make websites.</h2>

        <p className="text-light-gray my-8">
          I&apos;m a full-stack developer equipped with the urge to turn ideas
          into exceptional digital experiences.
        </p>

        <div className="mb-10">
          <Spotify track={spotifyData} />
        </div>

        <NavMenu />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-8">
          <Image width="50" src={me} alt="me" className="rounded-full" />

          <ul className="flex items-center gap-8">
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
    </div>
  );
};

export default LeftColumn;
