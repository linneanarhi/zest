import { Link } from "react-router-dom";
import "../../App.css";
import styles from "./ProductInfo.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart,} from "@fortawesome/free-solid-svg-icons";

function ProductInfo({ product, related }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
  };
  

  return (
    <>
    
      <div className={styles.ProductInfo}>
        <img
          src={product.image}
          alt={product.productName}
          className={styles.productImg}
        />
        <div className={styles.ProductDetails}>
        <h1>{product.productName}</h1>
        <p>{product.description}</p>
        
        <p>Pris: {product.price} SEK</p>
        
        
        <div>
          
          <button onClick={()=> setCount(count - 1)}disabled ={count===0}> - </button>
          <span>
          {count}
          </span>
          <button onClick={()=> setCount(count + 1)} > + </button>
        
          <button className={styles.Shopping}>Add to cart</button>
          <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        </div>
      


    
      <h2 className={styles.relatedText}>Related Products</h2>

      {/* Produktkort som alltid ska visas */}
      <div className={styles.relatedProductsGrid}>
        {related.length > 0 ? (
          related.slice(0,5).map((relatedProduct) => (
            <div key={relatedProduct.id} className={styles.hiddenRelated}>
              <div className={styles.relatedImg}>
              <img
                src={relatedProduct.image}
                alt={relatedProduct.productName}
                
              />
              </div>
              <div className={styles.relatedInfo}>
              <p>{relatedProduct.productName}</p>
              <p>{relatedProduct.price} SEK</p>
              </div>
            </div>
          ))
        ) : (
          <p>Inga relaterade produkter hittades.</p>
        )}
      </div>

      
      {windowWidth < 1024 && (
        <div className={styles.relatedSlider}>
          <Slider {...sliderSettings}>
            {related.map((relatedProduct) => (
              <div key={relatedProduct.id} className={styles.relatedItem}>
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.productName}
                  className={styles.relatedImg}
                />
                <p>{relatedProduct.productName}</p>
                <p>{relatedProduct.price} SEK</p>
              </div>
            ))}
          </Slider>
        </div>
        
      )}
      
    </>
  );
}

export default ProductInfo;
