import Image from "next/image";
import Link from "next/link";

import spotifyLogo from "../../assets/images/spotify.png";
import equalizer from "../../assets/images/equalizer.gif";

const Spotify = ({ track }) => {
  const { isPlaying, title, artist, songUrl } = track;

  return (
    <div className="text-light-gray text-sm flex flex-wrap items-center gap-3">
      <Image width="16" src={spotifyLogo} alt="Spotify" />

      {isPlaying ? (
        <>
          Now playing:
          <Link href={songUrl} target="_blank">
            {title} - {artist}
          </Link>
          <Image width="16" src={equalizer} alt="Spotify" />
        </>
      ) : (
        <p>Nothing playing right now.</p>
      )}
    </div>
  );
};

export default Spotify;
