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

      <div className={styles.inspoProduct}>
  <div className={styles.inspoItem}>
    <img src="https://www.hay.com/globalassets/blocks/brandsite/inspiration/the-hay-vase-collection/2024/arcs-vase-white_arcs-trolley_910x1100.jpg?w=800" alt="Spring 2025" />
    <div className={styles.inspoOverlay}>
      <h2>Spring 2025</h2>
    </div>
  </div>

  <div className={styles.inspoItem}>
    <img src="https://www.hay.com/img_20240909014215/globalassets/inriver/integration/service/colour-cabinet-tall_910x1100_brandmodel2.jpg?w=1200" alt="Inspiration" />
    <div className={styles.inspoOverlay}>
      <h2>Inspiration</h2>
    </div>
  </div>

  <div className={styles.inspoItem}>
    <img src="https://www.hay.com/img_20220826103333/globalassets/inriver/integration/service/check-bath-mat_910x1100_brandmodel.jpg?w=1200" alt="Coming Soon" />
    <div className={styles.inspoOverlay}>
      <h2>Coming Soon</h2>
    </div>
  </div>
</div> 
       
           
    </>
  );
}

export default Hero;
