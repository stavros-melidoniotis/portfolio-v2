import Head from "next/head";
import LeftColumn from "../components/LeftColumn/LeftColumn";
import RightColumn from "../components/RightColumn/RightColumn";
import Cursor from "../components/Cursor/Cursor";

import { getPinnedRepos, getGists } from "../lib/github";
import { getNowPlaying } from "../lib/spotify";

export default function Home({ featuredProjects, snippets, spotify }) {
  return (
    <>
      <Head>
        <title>Stavros Melidoniotis - Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Cursor />

      <main className="relative max-w-[1440px] flex flex-col lg:flex-row justify-between gap-8 mx-auto px-10">
        <div className="fixed top-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-b from-black to-transparent z-20"></div>

        <LeftColumn spotifyData={spotify} />
        <RightColumn featuredProjects={featuredProjects} snippets={snippets} />

        <div className="fixed bottom-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-t from-black to-transparent z-20"></div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const [featuredProjects, snippets, spotify] = await Promise.all([
    getPinnedRepos(),
    getGists(),
    getNowPlaying(),
  ]);

  return {
    props: {
      featuredProjects,
      snippets,
      spotify,
    },
  };
}
