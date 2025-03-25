import styles from "../AdminHeader/AdminHeader.module.css";
import { Link } from "react-router";

function AdminHeader() {
  return (
    <>
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
    </>
  );
}

export default AdminHeader;
