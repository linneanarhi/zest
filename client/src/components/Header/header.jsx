import { useState } from "react";
import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping,faHeart,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



function Header () {
    const [isOpen, setIsOpen] = useState(false);
    //Returnerar JSX
        return (
            <div>
            <nav className={styles.navbar}>
              <div className={styles.navbarContainer}>
                {/* Hamburger button (for mobile) */}
                <button
                  className={styles.navbarToggle}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ☰
                </button>
        
                {/* Menu items */}
                <ul className={`${styles["navbarMenu"]} ${isOpen ? styles.open : ""}`}>
                  <ol><a href="/" className={styles.navbarLink}>Nyheter</a></ol>
                  <ol><a href="/about" className={styles.navbarLink}>Inredning</a></ol>
                  <ol><a href="/contact" className={styles.navbarLink}>Belysning</a></ol>
                  <ol><a href="/contact" className={styles.navbarLink}>Möbler</a></ol>
                </ul>
              </div>
            </nav>
            <img src="/image/zest3.png" alt="ZEST" />
           <div>
           <FontAwesomeIcon icon={faBagShopping} />
           <FontAwesomeIcon icon={faHeart} />
           </div>

           <div>
            <input type="text" placeholder="search.." />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
           </div>
          
        <div className={styles.catagoryDesktop}>
           <ul >
            <ol>Nyheter</ol>
            <ol>Inredning</ol>
            <ol>Belysning</ol>
            <ol>Möbler</ol>
           </ul>

        </div>
        </div>
    );
}


export default Header; 