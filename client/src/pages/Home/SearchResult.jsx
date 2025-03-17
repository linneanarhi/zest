import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";



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
          <div>
      <h2>Items found: {query.length+1}</h2>

      {results.length === 0 ? (
        <p>No result.</p>
      ) : (
        <ul>
          {results.map((product) => (
            <li key={product.id}>
              <Link to={`/productdetails/${product.slug}`}>
                <img src={product.image} alt={product.productName} width="100" />
                <p>{product.productName}</p>
                <p>{product.price}SEK</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
          </>
        );
      }
  
  export default SearchResult;