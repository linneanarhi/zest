import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // Hanterar synligheten av sökrutan

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${query.trim()}`); // Navigera till söksidan med query som URL-parameter
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <button
          className={styles.navbarToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div className={styles.catagoryDesktop}>
          <ul>
            <li>New In</li>
            <li>Interior</li>
            <li>Lightning</li>
            <li>Furniture</li>
          </ul>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className={`${styles.desktopSearch} ${styles.searchInput}`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <div className={styles.imageLogo}>
          <Link className={styles.productLink} to={`/`}>
            <img
              className={styles.logo}
              src="/image/newLogo2.png"
              alt="ZEST"
              title="Home"
            />
          </Link>
        </div>

        <div className={styles.headerIcon}>
          <Link className={styles.navbarLink} to="/shoppingcart">
            <FontAwesomeIcon
              icon={faBagShopping}
              className={styles.iconBag}
              title="Shopping Bag"
            />
          </Link>
          <FontAwesomeIcon
            icon={faHeart}
            className={styles.iconHeart}
            title="Favorites"
          />

          {/* Sökrutan */}
          {searchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className={`${styles.searchInput} ${
                searchOpen ? styles.open : ""
              }`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress} // Lyssna på Enter
            />
          )}

          <div
            className={styles.iconSearch}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? (
              "X"
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} title="Search" />
            )}
          </div>
        </div>

        {/* Menu items */}
        <ul className={`${styles["navbarMenu"]} ${isOpen ? styles.open : ""}`}>
          <li>New In</li>
          <li>Interior</li>
          <li>Lightning</li>
          <li>Furniture</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
