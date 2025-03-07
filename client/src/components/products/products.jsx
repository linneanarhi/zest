import { Link } from 'react-router-dom'; 
import styles from './products.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function ProductList({ products }) {
  return (
    <div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.productContainer} key={product.id}>
            <Link className={styles.productLink} to={`/productdetails/${product.id}`}>
              <img className={styles.productImage} src={product.image} alt={product.productName} />
              <div className={styles.overlay}>
                <h2>{product.productName}</h2>
                <span>{product.price} sek</span>
              </div>
            </Link>
            <button className={styles.favoriteButton} title="Favorit">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
