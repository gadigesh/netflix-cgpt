import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import soundOnImage from "../Images/sound_On.png";
import soundOffImage from "../Images/sound_Off.png";
import replay from "../Images/replay.png";
import YouTube from "react-youtube";

const VideoBackground = ({ movieId }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState(null);
  const video = useRef(null);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);
  // const handleMuteClick = (e) => {
  //   setIsMuted(!isMuted);
  //   e.target.playVideo();
  // };

  const handlePlayerReady = (event) => {
    const ytPlayer = event.target;
    ytPlayer.mute();
    ytPlayer.playVideo();
    setPlayer(ytPlayer);
  };

  const handleMuteClick = () => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
      player.playVideo();
    } else {
      player.mute();
    }
    setIsMuted(!isMuted);
  };

  const handleReplay = () => {
    if (player) {
      player.seekTo(0); // Go to start
      player.playVideo(); // Play again
    }
  };

  return (
    <div className="w-screen top-28 md:top-0 relative md:static">
      <YouTube
        className="w-screen z-0 aspect-video h-full"
        ref={video}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            loop: 1,
            modestbranding: 1,
            playlist: trailerVideo?.key,
            rel: 0,
          },
        }}
        videoId={trailerVideo?.key}
        onReady={handlePlayerReady}
      ></YouTube>

      <img
        className="w-7 md:w-11 right-[15%] md:right-[10%] z-50 top-[65%] md:top-[75%] absolute cursor-pointer"
        src={isMuted ? soundOffImage : soundOnImage}
        alt="mute/unmute Button"
        onClick={() => handleMuteClick()}
      />
      <img
        className="w-7 md:w-11 right-[5%] z-50 top-[65%] md:top-[75%] absolute cursor-pointer"
        src={replay}
        alt="replay Button"
        onClick={() => handleReplay()}
      />
    </div>
  );
};

export default VideoBackground;
