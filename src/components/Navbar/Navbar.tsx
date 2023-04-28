import React from "react";
import styles from "./Navbar.module.scss";
import InputComponent from "../Input/InputComponent";

// type NavbarProps = {

// };

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <img src="/logo.svg" alt="" srcSet="" />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.searchContainer}>
          <InputComponent type="search" placeholder="Search for anything" />
        </div>
        <div className={styles.options}>
          <a href="" className={styles.docs}>
            Docs
          </a>

          <div className={styles.notificationContainer}>
            <img src="/bell.svg" alt="" srcSet="" />
          </div>

          <div className={styles.avatar}></div>
          <div className={styles.name}>
            <p>Adedeji</p>
            <img src="/chevrondown.svg" alt="" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
