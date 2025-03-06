import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // För att hämta parametrar från URL:en

const ProductDetails = () => {
  const { productName } = useParams(); // Hämtar 'productName' från URL-parametern
console.log(productName);

useEffect(() => {

}, [productName]);

return <div>Product</div>

 
};

export default ProductDetails;