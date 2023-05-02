import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

// import { getAllUsers, getUserById, User } from "../../utils/users";

// type RootProps = {

// };

const Root: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.root}>
      <Navbar toggle={toggleNav} />
      <div className={styles.sidebarLayout}>
        <Sidebar showNav={showNav} setShowNav={setShowNav} />

        <Outlet />
      </div>
    </div>
  );
};
export default Root;
