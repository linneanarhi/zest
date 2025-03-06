import {Link} from 'react-router';
import styles from './products.module.css';

function ProductList ({ products }) {
    //Returnerar JSX
    return (
        <div>
            <a href='ProductDetails' className={styles.productLink} to={`/productdetails/${encodeURIComponent(products.productName)}`}>
                <div className={styles.productGrid}>
                    {products.map((product) => (
                        <div className={styles.productContainer}> 
                            <img className={styles.productImage} src={product.image}></img>

                            <div className={styles.overlay}>
                                <h2>{product.productName}</h2>
                                <span>{product.price} sek</span>        
                            </div>
                        </div>
                
                      
                    ))}
                </div>
            </a> 
        </div>
        
       
    );
}

export default ProductList; 