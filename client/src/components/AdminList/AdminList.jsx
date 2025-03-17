import { useState, useEffect } from "react";
import styles from "./AdminList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom"; 

function AdminList() {
    const [products, setProducts] = useState([]);

    const deleteById = (id) => {
        fetch(`/api/adminproducts/${id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // Uppdatera state och filtrera bort raderad produkt
                setProducts((oldProducts) => oldProducts.filter((product) => product.id !== id));
            } else {
                console.error("Error deleting product:", data.message);
            }
        })
        .catch((error) => console.error("Error:", error));
    };

    // Hämtar produkterna från backend när komponenten laddas
    useEffect(() => {
        fetch("/api/adminproducts")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data); // Uppdaterar state med produkterna
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []); // Tom array för att bara köra när komponenten laddas första gången

    return (
        <div className={styles.productList}>
            <div className={styles.adminTop}>
            <h2 className={styles.adminH2}>PRODUCTS</h2>
            <Link to='/admin/new'><button>NEW PRODUCT</button></Link>
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
                                <td><button onClick={() => deleteById(product.id)}><FontAwesomeIcon icon={faTrashCan} className={styles.deletebtn}/></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AdminList;