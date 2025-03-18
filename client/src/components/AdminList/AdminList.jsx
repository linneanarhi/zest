import { useState, useEffect } from "react";
import styles from "./AdminList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function AdminList() {
  const [products, setProducts] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");

  const deleteById = (id) => {
    fetch(`/api/adminproducts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Product deleted.");
          setDeleteMessage("Product deleted successfully!");

          setTimeout(() => {
            setDeleteMessage("");
          }, 3000);

          setProducts((oldProducts) =>
            oldProducts.filter((product) => product.id !== id)
          );
        } else {
          console.error("Error deleting product:", data.message);
          setDeleteMessage("Error deleting product.");
        }
      })
      .catch((error) => console.error("Error:", error));
    setDeleteMessage("Error deleting product.");
  };

  useEffect(() => {
    fetch("/api/adminproducts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      {deleteMessage && <p>{deleteMessage}</p>}{" "}
      <div className={styles.productList}>
        <div className={styles.adminTop}>
          <h2 className={styles.adminH2}>PRODUCTS</h2>
          <Link to="/admin/new">
            <button>NEW PRODUCT</button>
          </Link>
        </div>

        {/* Om inga produkter finns, visa ett meddelande */}
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <table id="productTable">
            <thead>
              <tr>
                <th>PRODUCT NAME</th>
                <th>SKU</th>
                <th>PRICE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.SKU}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={() => deleteById(product.id)}>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className={styles.deletebtn}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default AdminList;
