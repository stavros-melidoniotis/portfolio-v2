import Image from "next/image";
import NavMenu from "./NavMenu";
import styles from "../styles/LeftColumn.module.css";

import me from "../assets/images/me.webp";
import Link from "next/link";

const LeftColumn = () => {
  return (
    <div className="fixed flex flex-col justify-between w-1/3 max-w-xl h-screen pt-28 pb-20">
      <div>
        <h1 className="text-6xl font-bold mb-4">
          Hello, I&apos;m <br /> Stavros Melidoniotis
          <span className={styles.wavyHand}>👋</span>
        </h1>

        <h2 className="text-3xl">Full Stack Developer</h2>

        <p className="text-light-gray mt-8 mb-12">
          I would describe myself as a passionate, detail-oriented individual
          with a get-it-done, on-time and high-quality-product spirit. I&apos;m
          always keen on learning new stuff and experimenting with new
          technologies in the areas of Web Development and AI.
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
            >
              Github
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/stavros-melidoniotis/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>

          <li>
            <Link href="mailto:melidon.stavros@gmail.com">Email</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftColumn;
