import video from "../../../Images/Video/7971cf3b-3ab260cf.mp4";
import styles from "./hero.module.css";
import { useRef, useState } from "react";


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
      <div className={styles.heroText}>
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi labore explicabo aliquam illum, doloribus voluptate inventore velit officia. Nemo, consectetur. Consectetur fuga nihil at autem ratione maiores eius odio aperiam! </p>
        </div>

      </div>    
           
    </>
  );
}

export default Hero;
