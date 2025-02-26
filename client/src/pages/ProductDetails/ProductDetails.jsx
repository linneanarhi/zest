import {useEffect, useState} from 'react';
import {useParams} from 'react-router';

function ProductDetails() {

  let params = useParams();
  const [products, setProducts] = useState(null);

  useEffect (() => {
    fetch(`/api/products/${params.id}`)
    .then((resp) => resp.json())
    .then((products) => {
      setProducts(products);
    });
  }, []);

    return products ? (
      <>
      <header>
        <h1>{products.productName}</h1>
        </header>

      
      </>
    ) : "Laddar...";
  }
  
  export default ProductDetails;