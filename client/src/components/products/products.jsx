import { Link } from 'react-router-dom'; // Kom ihåg att använda react-router-dom
import styles from './products.module.css';

function ProductList({ products }) {
  return (
    <div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.productContainer} key={product.id}>
            {/* Dynamisk länk med produktens ID */}
            <Link className={styles.productLink} to={`/productdetails/${product.id}`}>
              <img className={styles.productImage} src={product.image} alt={product.productName} />
              <div className={styles.overlay}>
                <h2>{product.productName}</h2>
                <span>{product.price} sek</span>        
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
