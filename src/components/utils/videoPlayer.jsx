"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoID }) => {
   const [isOpen, setIsOpen] = useState(true);
   const handleVideoPlayer = () => {
      setIsOpen((prevState) => !prevState);
   };
   const option = {
      width: "250",
      height: "250",
   };

   const Player = () => {
      return (
         <div className="fixed bottom-2 right-2 ">
            <button
               onClick={handleVideoPlayer}
               className="text-color-primary float-right bg-color-secondary px-3 mb-1"
            >
               X
            </button>
            <YouTube
               videoId={videoID}
               onReady={(event) => event.target.pauseVideo()}
               opts={option}
               onError={() => alert("video error")}
            />
         </div>
      );
   };

   return isOpen ? (
      <Player />
   ) : (
      <button
         className="border rounded-full fixed bottom-5 right-5 w-32 bg-color-accent hover:bg-color-primary transition-all shadow-xl text-color-dark"
         onClick={handleVideoPlayer}
      >
         Tonton Trailer
      </button>
   );
};
export default VideoPlayer;
