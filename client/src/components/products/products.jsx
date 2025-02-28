import {Link} from 'react-router';
import styles from './products.module.css';

function ProductList ({ products }) {
    //Returnerar JSX
    return (
        <div>
            <Link className={styles.productLink} to={`/productdetails/${products.id}`}>
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
            </Link> 
        </div>
        
       
    );
}

export default ProductList; 