import { useState } from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; 

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
            onClick={() => setIsOpen(!isOpen)} title="Meny">
            {isOpen ? "✖" : "☰"}
            
          </button>
          
          <div className={styles.imageLogo}>
          <Link className={styles.productLink} to={`/`}>
          <img className={styles.logo} src="/image/zest3.png" alt="ZEST" title="Startsida"/>
          </Link>
          </div>
          
          <div className={styles.headerIcon}>
            <FontAwesomeIcon icon={faBagShopping} className={styles.icon} title="Varukorg" />
            <FontAwesomeIcon icon={faHeart} className={styles.icon} title="Favoriter"/>

            <input type="text" placeholder="search.." />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} title="Sök"/>
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
