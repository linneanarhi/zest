import { useState, useEffect } from "react";
import "../../App.css";
import ProductList from "../../components/products/products";
import Hero from "../../components/Hero/hero";
import video from "../../../Images/Video/7971cf3b-3ab260cf.mp4";

const images = [
  {
    src: "https://www.hay.com/globalassets/blocks/brandsite/inspiration/the-hay-vase-collection/2024/arcs-vase-white_arcs-trolley_910x1100.jpg?w=800",
    alt: "Spring 2025",
    label: "Spring 2025",
  },
  {
    src: "https://www.hay.com/img_20240909014215/globalassets/inriver/integration/service/colour-cabinet-tall_910x1100_brandmodel2.jpg?w=1200",
    alt: "Inspiration",
    label: "Inspiration",
  },
  {
    src: "https://www.hay.com/img_20220826103333/globalassets/inriver/integration/service/check-bath-mat_910x1100_brandmodel.jpg?w=1200",
    alt: "Coming Soon",
    label: "Coming Soon",
  },
];

function Home() {
  //tasks är state-variabeln, setTasks är funktionen som uppdaterar variabeln, [] är det inledande värdet för variabeln
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch-anrop till localhost:8000
    fetch("/api/products")
      .then((resp) => resp.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <>
      <Hero videoSrc={video} images={images} />
      <ProductList products={products} />
    </>
  );
}

export default Home;
