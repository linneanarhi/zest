import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Product ID från URL:", params.id); // Kontrollera att det inte är undefined

    if (!params.id) return;

    fetch(`/api/products/${params.id}`) // Fetch till den nya produktdetails-route
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [params.id]);

  return product ? (
    <div>
      <h1>{product.productName}</h1>
      <p>{product.description}</p>
      <p>Pris: {product.price} SEK</p>
      <img src={product.image} alt={product.productName} />
    </div>
  ) : (
    "Laddar..."
  );
}

export default ProductDetails;
