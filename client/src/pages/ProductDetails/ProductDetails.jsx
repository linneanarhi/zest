import {useEffect, useState} from 'react';
import {useParams} from 'react-router';

const ProductDetails = () => {
  const { productName } = useParams(); // Hämta produktnamnet från URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Hämta produktinformation från backend via API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${productName}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          // Visa fel om produkten inte finns
          console.error('Produkt hittades inte');
          setProduct(null); // För att hantera när produkten inte finns
        }
      } catch (error) {
        console.error('Något gick fel vid hämtning av produktdata:', error);
      }
    };
  
    fetchProduct();
  }, [productName]); // Kör om vid ändrad URL
  if (!product) {
    return <div>Laddar produkt...</div>;
  }

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>{product.description}</p>
      <p>Pris: ${product.price}</p>
    </div>
  );
};
 /*  const [products, setProducts] = useState(null);

  useEffect (() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/api/products/${productName}');
        const data = await response.json();
        setProducts(data);

      } catch(error) {
        console.error("fel vid hämtning", error);
      }
    };
    fetchProduct();
  }, [productName]);

  if (!product) return <p>Laddar produkt...</p>;

  return (
    <div>
      <h1>{products.productName}</h1>
      <img src={products.image} alt={products.productName} />
      <p>{products.description}</p>
      <p>Pris: {products.price} kr</p>
    </div>
  ); */


   /*  fetch(`/api/products/${productName}`)
    .then((resp) => resp.json())
    .then((products) => {
      setProducts(products);
    });
  }, []); */

 /*    return products ? (
      <>
      <header>
        <h1>{productName}</h1>
        <img src={products.image} alt={products.productName}/>
        </header>

      
      </>
    ) : "Laddar..."; */
  
  
  export default ProductDetails;