/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import styles from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";
import { User } from "../../utils/users";

type MenuProps = {
  setShowMenu: (arg0: boolean) => void;
  user?: User;
  type: string;
};

const Menu: React.FC<MenuProps> = ({ setShowMenu, user, type }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // add event listener on mount
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);

    // remove event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event: MouseEvent) {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      // click occurred outside of the menu, so close the menu
      // replace with your code to close the menu

      setShowMenu(false);
    }
  }

  return (
    <div
      className={`${styles.menu} ${
        type === "row" ? styles.row : styles.profile
      }`}
      ref={menuRef}
    >
      {type === "row" ? (
        <>
          <div
            className={styles.moreItem}
            onClick={() => navigate(`/Users/${user?.id}`)}
          >
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
        </>
      ) : (
        <>
          <div className={styles.moreItem} onClick={() => navigate("/login")}>
            <img src="/Icons/logoutIcon.svg" alt="" />
            <p>logout</p>
          </div>
          <a href="" className={styles.docs}>
            Docs
          </a>
        </>
      )}
    </div>
  );
};
export default Menu;
