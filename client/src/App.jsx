import { useState, useEffect } from 'react';
import './App.css'
import ProductList from './components/products/products';
import Header from './components/Header/header';


function App() {

    //tasks är state-variabeln, setTasks är funktionen som uppdaterar variabeln, [] är det inledande värdet för variabeln
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
  
    // fetch-anrop till localhost:8000
    fetch("/api/products")
      .then(resp => resp.json())
      .then(products => {
        setProducts(products);
      });
  
    }, []);
  
  

  return (
    <>

      <Header/>

      <ProductList products={products} />

    </>
  )
}

export default App
