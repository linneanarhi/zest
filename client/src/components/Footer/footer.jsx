import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareFacebook, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
/* import styles from './footer.module.css'; */
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {

    return (
        

        <>
        <div>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTiktok} />
        </div>

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
          <ul>
            <ol>Our Story</ol>
            <ol>Follow Us</ol>
          </ul>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>My pages</Accordion.Header>
        <Accordion.Body>
          <ul>
            <ol>Log in</ol>
          </ul>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Contact</Accordion.Header>
        <Accordion.Body>
          <ul>
            <ol>Return Policy</ol>
            <ol>Contact Us</ol>
          </ul>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          
        <div>About</div><div>My pages</div><div>Contact</div>
        </>
    )
}

export default Footer;