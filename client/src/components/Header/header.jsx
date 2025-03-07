import { useState } from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  //Returnerar JSX
  return (
    <>
      {/*MOBIL*/}
      <nav className={styles.navbar}>
        
          {/* Hamburger button (for mobile) */}
          <button
            className={styles.navbarToggle}
            onClick={() => setIsOpen(!isOpen)}
            
          >
            ☰
          </button>
          <div className={styles.imageLogo}>
          <img className={styles.logo} src="/image/zest3.png" alt="ZEST" />
          </div>
          <div className={styles.headerIcon}>
          <Link to="/shoppingcart">
            <FontAwesomeIcon icon={faBagShopping} />
            
            </Link>
            <FontAwesomeIcon icon={faHeart} />

            <input type="text" placeholder="search.." />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          {/* Menu items */}
          <ul
            className={`${styles["navbarMenu"]} ${isOpen ? styles.open : ""}`}
          >
            
              <li>Nyheter</li>
              <li>Inredning</li>
              <li>Belysning</li>
              <li>Möbler</li>
            
          </ul>
        
      </nav>

      {/*DESKTOP*/}

      <div className={styles.catagoryDesktop}>
        <ul>
          <li>Nyheter</li>
          <li>Inredning</li>
          <li>Belysning</li>
          <li>Möbler</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
