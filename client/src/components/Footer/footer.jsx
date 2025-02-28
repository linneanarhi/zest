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

        <div className={styles.mobileAccordion}>
        <Accordion>
      <Accordion.Item  eventKey="0" >
        <Accordion.Header >About</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Our Story</li>
          </ul>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>My Pages</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Log In</li>
          </ul>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Contact</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Return Policy</li>
            <li>Contact Us</li>
          </ul>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
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