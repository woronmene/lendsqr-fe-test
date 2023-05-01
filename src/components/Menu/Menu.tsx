import React from "react";
import styles from "./Menu.module.scss";

// type MenuProps = {

// };

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.moreItem}>
        <img src="/Icons/viewIcon.svg" alt="" />
        <p>View Details</p>
      </div>
      <div className={styles.moreItem}>
        <img src="/Icons/blacklistIcon.svg" alt="" />
        <p>Blacklist User</p>
      </div>
      <div className={styles.moreItem}>
        <img src="/Icons/activateIcon.svg" alt="" />
        <p>Activate User</p>
      </div>
    </div>
  );
};
export default Menu;
