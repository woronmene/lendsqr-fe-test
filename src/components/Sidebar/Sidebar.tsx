import React, { useEffect } from "react";
import styles from "./Sidebar.module.scss";

type SidebarProps = {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ showNav, setShowNav }) => {
  //   const [showNav, setShowNav] = useState<boolean>(true);
  const screenWidthThreshold = 1024;

  useEffect(() => {
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

  //   const toggleNav = () => {
  //     setShowNav(!showNav);
  //   };

  return (
    <div
      className={`${styles.sidebar} ${
        showNav ? styles.isOpen : styles.isClosed
      }`}
    ></div>
  );
};
export default Sidebar;
