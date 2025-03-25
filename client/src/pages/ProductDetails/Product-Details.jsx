import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../../components/ProductDetails/ProductInfo";

function ProductDetails() {
  let params = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  // Uppdatera sidtiteln baserat på produkt-slug
  useEffect(() => {
    if (params.slug) {
      document.title = `Produkt: ${params.slug} | ZEST`;
    }
  }, [params.slug]);

  // Hämta produktdata från API
  useEffect(() => {
    if (!params.slug) return;

    fetch(`/api/products/${params.slug}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (data.product) {
          setProduct(data.product);
        } else {
          console.error("No product found in response:", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [params.slug]);

  // Hämta relaterade produkter baserat på kategori och uteslut aktuell produkt
  useEffect(() => {
    if (!product || !product.category) return;

    fetch(
      `/api/related-products?category=${product.category}&excludeProductName=${product.productName}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRelated(data);
      })
      .catch((err) => {
        console.error("Error fetching related products:", err);
      });
  }, [product, params.slug]);

  return (
    <>
      {product ? (
        <ProductInfo product={product} related={related} />
      ) : (
        <p>Laddar...</p>
      )}
    </>
  );
}

export default ProductDetails;
