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

  return (
    <div
      className={`${styles.sidebarItem} ${page === text && styles.selected}`}
      onClick={() => {
        console.log(page, text);

        navigate(`/${text}`);
      }}
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
