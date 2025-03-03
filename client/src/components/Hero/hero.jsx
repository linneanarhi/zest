import video from "../../../Images/Video/7971cf3b-3ab260cf.mp4";
import styles from "./hero.module.css";
import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiPlay, BiSkipNext, BiSkipPrevious, BiPause } from "react-icons/bi";

function Hero() {
    
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); 

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>


    <div className={styles.videoContainer}>
         
     <video    
        autoPlay muted loop
        className={styles.videoPlayer}
        src={video}
        ref={videoRef}
        onClick={handlePlay}
        style = {{ cursor: "pointer" }}
      ></video>


      </div>    
           
    </>
  );
}

export default Hero;
