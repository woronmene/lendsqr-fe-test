import React, { useEffect } from "react";
import styles from "./Sidebar.module.scss";
import { customers, businesses, settings } from "../../utils/constants";
import SidebarItem from "../SidebarItem/SidebarItem";

type SidebarProps = {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ showNav, setShowNav }) => {
  const screenWidthThreshold = 1024;

  useEffect(() => {
    if (window.innerWidth < screenWidthThreshold) {
      setShowNav(false);
    }
    const handleResize = () => {
      if (window.innerWidth < screenWidthThreshold) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setShowNav]);

  return (
    <div
      className={`${styles.sidebar} ${
        showNav ? styles.isOpen : styles.isClosed
      }`}
    >
      <div className={styles.container}>
        <SidebarItem
          text="Switch Organization"
          image="/Icons/switchOrganizationIcon.svg"
          icon="/Icons/chevronDownIcon.svg"
          setShowNav={setShowNav}
        />
        <SidebarItem
          setShowNav={setShowNav}
          text="Dashboard"
          image="/Icons/dashboardIcon.svg"
        />
        <div>
          <p className={styles.sidebarHeading}>CUSTOMERS</p>
          {customers.map((item) => (
            <SidebarItem
              key={item.text}
              setShowNav={setShowNav}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>

        <div>
          <p className={styles.sidebarHeading}>BUSINESSES</p>
          {businesses.map((item) => (
            <SidebarItem
              key={item.text}
              setShowNav={setShowNav}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>

        <div>
          <p className={styles.sidebarHeading}>SETTINGS</p>
          {settings.map((item) => (
            <SidebarItem
              key={item.text}
              setShowNav={setShowNav}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
        <div className={styles.logout}>
          <SidebarItem
            text="Logout"
            setShowNav={setShowNav}
            image="/Icons/logoutIcon.svg"
          />
        </div>

        <p className={styles.versionText}>v1.2.0</p>
      </div>
    </div>
  );
};
export default Sidebar;
