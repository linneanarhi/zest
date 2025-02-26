import { useState } from "react";
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";  // För "regular" ikoner
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Header () {
    const [isOpen, setIsOpen] = useState(false);
    //Returnerar JSX
        return (
            <div>
            <nav className="navbar">
              <div className="navbar-container">
                {/* Hamburger button (for mobile) */}
                <button
                  className="navbar-toggle"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ☰
                </button>
        
                {/* Menu items */}
                <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
                  <ol><a href="/" className="navbar-olnk">Nyheter</a></ol>
                  <ol><a href="/about" className="navbar-olnk">Topplistan</a></ol>
                  <ol><a href="/contact" className="navbar-olnk">REA</a></ol>
                  <ol><a href="/contact" className="navbar-olnk">Kampanjer</a></ol>
                </ul>
              </div>
            </nav>
            <img src="/image/zest3.png" alt="ZEST" />
           <div>
           <FontAwesomeIcon icon={faHeart} />
           <FontAwesomeIcon icon={faBagShopping} />
           </div>
          
        <div className="catagory-desktop">
           <ul >
            <ol>Nyheter</ol>
            <ol>Topplistan</ol>
            <ol>REA</ol>
            <ol>Kampanjer</ol>
           </ul>

        </div>
        </div>
    );
}


export default Header; 