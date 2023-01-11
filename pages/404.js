import Head from "next/head";
import Link from "next/link";
import Flashlight from "../components/Flashlight/Flashlight";

export default function Custom404() {
  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <>
      <Head>
        <title> 404 - Page not found </title>
      </Head>

      <div className="max-w-[1440px] px-10 mx-auto h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col md:w-2/3">
          <code className="text-4xl md:text-8xl mb-6 font-bold">
            new Error(404)
          </code>

          <h2 className="text-lg md:text-2xl text-light-gray">
            Sorry, the page you requested could not be found. Maybe you were
            looking for my{" "}
            <Link
              href="/"
              className="w-fit text-lg md:text-2xl mt-6 underline text-white"
            >
              featured projects
            </Link>{" "}
            or some{" "}
            <Link
              href="/#about-me"
              className="w-fit text-lg md:text-2xl mt-6 underline text-white"
            >
              {" "}
              info about me
            </Link>
            ? Make sure to also check{" "}
            <Link
              href="/#works"
              className="w-fit text-lg md:text-2xl mt-6 underline text-white"
            >
              my work
            </Link>{" "}
            and{" "}
            <Link
              href="/#snippets"
              className="w-fit text-lg md:text-2xl mt-6 underline text-white"
            >
              my snippets collection
            </Link>
            .
          </h2>
        </div>

        {!isTouchDevice() ? <Flashlight /> : null}
      </div>
    </>
  );
}
