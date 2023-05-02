import React from "react";
import styles from "./SidebarItem.module.scss";
import { useNavigate, useParams } from "react-router-dom";

type SidebarItemProps = {
  text: string;
  image: string;
  icon?: string;
  setShowNav: (arg0: boolean) => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  image,
  icon,
  setShowNav,
}) => {
  const navigate = useNavigate();
  const { page } = useParams();

  const screenWidthThreshold = 1024;

  const handleNavigation = () => {
    if (text === "Logout") {
      navigate("/login");
    } else if (text === "Switch Organization") {
      if (window.innerWidth < screenWidthThreshold) {
        setShowNav(false);
      }
      return;
    } else {
      if (window.innerWidth < screenWidthThreshold) {
        setShowNav(false);
      }
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
