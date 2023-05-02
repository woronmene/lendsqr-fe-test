import React from "react";
import styles from "./SidebarItem.module.scss";
import { useNavigate, useParams } from "react-router-dom";

type SidebarItemProps = {
  text: string;
  image: string;
  icon?: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ text, image, icon }) => {
  const navigate = useNavigate();
  const { page } = useParams();

  const handleNavigation = () => {
    if (text === "Logout") {
      navigate("/login");
    } else if (text === "Switch Organization") {
      return;
    } else {
      navigate(`/${text}`);
    }
  };

  return (
    <div
      className={`${styles.sidebarItem} ${page === text && styles.selected}`}
      onClick={handleNavigation}
    >
      {/* <div className={styles.sidebarItemIcon}> */}
      <img src={image} alt="" />
      {/* </div> */}

      <p>{text}</p>

      {icon && <img src={icon} alt="" srcSet="" />}
    </div>
  );
};
export default SidebarItem;
