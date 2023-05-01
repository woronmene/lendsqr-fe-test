import React, { useRef, useEffect } from "react";
import styles from "./Menu.module.scss";

type MenuProps = {
  setShowMenu: (arg0: boolean) => void;
};

const Menu: React.FC<MenuProps> = ({ setShowMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);

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
    <div className={styles.menu} ref={menuRef}>
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
