import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareFacebook, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import styles from './footer.module.css';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {

    return (
        
        <>

        <footer> 
        <div className={styles.footerDesktop}>
        <div className={styles.follow}>Follow Us:</div>
        <div className={styles.footerIcon}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTiktok} />
        </div>

    


      
    <div className={styles.footerList}>

      <ul>
        <li><strong>About</strong></li>
        <li>Our Story</li>
      </ul>
      <ul>
        <li><strong>My Pages</strong></li>
        <li>Log In</li>
      </ul>
      <ul>
  
        <li><strong>Contact</strong></li>
        <li>Return Policy</li>
        <li>Contact Us</li>
      </ul>
    </div>
      
      <div className={styles.copyright}><small>©ZEST</small></div>
      </div>
      </footer>
        
        </>
    )
}

export default Footer;