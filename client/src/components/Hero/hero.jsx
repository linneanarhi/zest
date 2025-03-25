import styles from "./hero.module.css";
import { useRef, useState } from "react";

function Hero({ videoSrc, images }) {
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
          autoPlay
          muted
          loop
          className={styles.videoPlayer}
          src={videoSrc}
          ref={videoRef}
          onClick={handlePlay}
          style={{ cursor: "pointer" }}
        ></video>
        <div className={styles.heroText}>
          <h1>Transform Your Space</h1>
          <p>
            Explore curated designs that blend functionality with timeless
            beauty. From bold statements to minimalist essentials, our
            collection from ZEST brings Scandinavian elegance to every room. Let
            your space reflect your unique style with pieces that inspire.{" "}
          </p>
        </div>
      </div>

      <div className={styles.inspoProduct}>
        {images.map((image, index) => (
          <div className={styles.inspoItem} key={index}>
            <img src={image.src} alt={image.alt} />
            <div className={styles.inspoOverlay}>
              <h2>{image.label}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hero;
