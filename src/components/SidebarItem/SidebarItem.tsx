import React from "react";
import styles from "./SidebarItem.module.scss";

type SidebarItemProps = {
  text: string;
  image: string;
  icon?: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ text, image, icon }) => {
  return (
    <div className={styles.sidebarItem}>
      {/* <div className={styles.sidebarItemIcon}> */}
      <img src={image} alt="" />
      {/* </div> */}

      <p>{text}</p>

      {icon && <img src={icon} alt="" srcSet="" />}
    </div>
  );
};
export default SidebarItem;
