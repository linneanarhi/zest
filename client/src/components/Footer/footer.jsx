import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.css";
import Accordion from "../Accordion/accordion";

function Footer() {
  return (
    <>
      <footer className={styles.footerDesktop}>
        {/* <div className={styles.follow}>Follow Us:</div> */}
        <div className={styles.footerIcon}>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTiktok} />
        </div>

        {/*ACCORDION*/}
        <div className={styles.mobileAccordion}>
          <Accordion />
        </div>

        <div className={styles.footerList}>
          <ul>
            <li>
              <strong>ABOUT</strong>
            </li>
            <li>Our Story</li>
            <li>Social Media</li>
          </ul>
          <ul>
            <li>
              <strong>MY PAGES</strong>
            </li>
            <li>Log In</li>
          </ul>
          <ul>
            <li>
              <strong>CONTACT</strong>
            </li>
            <li>Return Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={styles.copyright}>
          <small>©ZEST</small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
