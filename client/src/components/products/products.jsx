import { Link } from 'react-router-dom'; 
import styles from './products.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function ProductList({ products }) {
  const sevenDaysAgoUnix = Math.floor(Date.now() / 1000) - (7 * 24 * 60 * 60); // UNIX-tid för 7 dagar sedan

  return (
    <div>
      <div className={styles.productGrid}>
        {products.map((product) => {
          console.log("Product:", product.productName, "Publish Date:", product.publishDate); // Debugging

          const isNew = product.publishDate >= sevenDaysAgoUnix; // Jämför rätt UNIX-tid

          return (
            <div className={styles.productContainer} key={product.id}>
              <Link className={styles.productLink} to={`/productdetails/${product.slug}`}>
                <div className={styles.imageWrapper}>
                  {isNew && <span className={styles.newTag}>NEW</span>} {/* Visa "NEW" om ny */}
                  <img className={styles.productImage} src={product.image} alt={product.productName} />
                </div>
                <div className={styles.overlay}>
                  <h2>{product.productName}</h2>
                  <span>{product.price} SEK</span>
                </div>
              </Link>
              <button className={styles.favoriteButton}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
