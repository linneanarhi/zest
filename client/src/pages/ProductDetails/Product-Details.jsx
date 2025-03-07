import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import ProductInfo from "../../components/ProductDetails/ProductInfo";



function ProductDetails() {
  let params = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  // Första useEffect för att hämta produktdata
  useEffect(() => {
    console.log("Product ID från URL:", params.id); // Kontrollera att det inte är undefined

    if (!params.id) return;

    fetch(`/api/products/${params.id}`) // Fetch till produktdetails-API
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [params.id]);

  // Andra useEffect för att hämta relaterade produkter baserat på märke
  useEffect(() => {
    if (product && product.brand) {
      fetch(`/api/products?brand=${product.brand}&excludeId=${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setRelated(data);
        })
        .catch((err) => {
          console.error("Error fetching related products:", err);
        });
    }
  }, [product, params.id]); // Kör denna när produkt eller params.id ändras

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


/* import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let params = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    console.log("Product ID från URL:", params.id); 

    if (!params.id) return;

    fetch(`/api/products/${params.id}`) 
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);

      }, [params.id]);
      
      useEffect(() => {
        if (product && product.brand) {
          fetch(`/api/products?brand=${product.brand}&excludeId=${params.id}`)
            .then((response) => response.json())
            .then((data) => {
              setRelated(data);
            })
            .catch((err) => {
              console.error("Error fetching related products:", err);
            });
        }
      }, [product, params.id]);

  if (data.brand) {
    fetch ('/api,products?brand=&{data.brand}&excludeproducts.id=${params.id}')
    .then((response)=> response.json())
    .then ((relatedData) => {
      setRelated(relatedData);

    })
    .catch((err) => console.error("Fetch error for related products:", err));
  }
})


  return product ? (
    <>
      <div>
        <div>
          <h1>{product.productName}</h1>
          <p>{product.description}</p>
          <p>Pris: {product.price} SEK</p>
          <img src={product.image} alt={product.productName} />
        </div>
  
        <div>
          <h2>Relaterade produkter</h2>
          <div>
            {related.length > 0 ? (
              related.map((relatedProduct) => (
                <div key={relatedProduct.id}>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.productName}
                  />
                  <p>{relatedProduct.productName}</p>
                  <p>{relatedProduct.price} SEK</p>
                </div>
              ))
            ) : (
              <p>Inga relaterade produkter hittades.</p>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    "Laddar..."
  );
}


export default ProductDetails;
 */