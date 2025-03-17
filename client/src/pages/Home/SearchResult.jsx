import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../../components/products/products";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import styles from "../../components/searchResult/Search.module.css";

function SearchResult() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q"); // Hämta query från URL
  const [results, setResults] = useState([]);


  useEffect(() => {
    if (!query) return;

    fetch(`/api/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.error("Error fetching search results:", err));
  }, [query]);

  return (
    <>
      <Header />
      <div>
        <h2 className={styles.searchH2}>Items found: {results.length}</h2>

        {results.length === 0 ? (
          <p>No result.</p>
        ) : (
          <ProductList products={results} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default SearchResult;
