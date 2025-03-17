import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import ProductInfo from "../../components/ProductDetails/ProductInfo";

function ProductDetails() {
  let params = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    document.title = `Produkt: ${params.slug} | ZEST`;
  }, []);

  // Första useEffect för att hämta produktdata
  useEffect(() => {
    console.log("Product slug från URL:", params.slug); // Kontrollera att det inte är undefined
  
    if (!params.slug) return;
  
    fetch(`/api/products/${params.slug}`) // Fetch till produktdetails-API
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched product:", data); // Lägg till debug-logg
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [params.slug]);

  // Andra useEffect för att hämta relaterade produkter baserat på märke
  useEffect(() => {
    if (product && product.brand) {
      fetch(`/api/products?brand=${product.brand}&excludeSlug=${params.slug}`)
        .then((response) => response.json())
        .then((data) => {
          setRelated(data);
        })
        .catch((err) => {
          console.error("Error fetching related products:", err);
        });
    }
  }, [product, params.slug]); // Kör denna när produkt eller params.id ändras

  return (
    <>
      <Header />
      {product ? (
        <ProductInfo product={product} related={related} />
      ) : (
        <p>Laddar...</p>
      )}
      <Footer />
     
      
    </>
  );
}

export default ProductDetails;


