import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./NavigationLayout.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
// import { Outlet } from "react-router-dom";

// import { getAllUsers, getUserById, User } from "../../utils/users";

type NavigationLayoutProps = {
  children: JSX.Element;
};

const NavigationLayout: React.FC<NavigationLayoutProps> = ({ children }) => {
  const [showNav, setShowNav] = useState<boolean>(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.root}>
      <Navbar toggle={toggleNav} />
      <div className={styles.sidebarLayout}>
        <Sidebar showNav={showNav} setShowNav={setShowNav} />

        {children}
      </div>
    </div>
  );
};
export default NavigationLayout;
