import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import InputComponent from "../Input/InputComponent";
import Menu from "../Menu/Menu";

type NavbarProps = {
  toggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const [showNavbarItems, setShowNavbarItems] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState(false);

  // const searchInputRef = useRef<HTMLInputElement>(null);

  const screenWidthThreshold = 768;

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < screenWidthThreshold) {
        setShowSearch(false);
        setShowNavbarItems(true);
      } else {
        setShowSearch(true);
        setShowNavbarItems(true);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [setShowSearch]);

  const handleSearchIconClick = () => {
    setShowSearch(true);
    setShowNavbarItems(false);
  };

  const handleSearchBlur = () => {
    if (window.innerWidth < screenWidthThreshold) {
      setShowSearch(false);
      setShowNavbarItems(true);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoSection}>
        <div className={styles.menu} onClick={() => toggle()}>
          <img src="/menu.svg" alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src="/logo.svg" alt="" srcSet="" />
        </div>
      </div>
      <div className={styles.rightSection}>
        {showSearch && (
          <div className={styles.searchContainer}>
            <InputComponent
              type="search"
              placeholder="Search for anything"
              onBlur={handleSearchBlur}
            />
          </div>
        )}
        <div className={styles.options}>
          {!showSearch && (
            <div
              className={styles.searchIconContainer}
              onClick={() => handleSearchIconClick()}
            >
              <img src="/searchIcon.svg" alt="" srcSet="" />
            </div>
          )}
          {showNavbarItems && (
            <>
              <a href="" className={styles.docs}>
                Docs
              </a>

              <div className={styles.notificationContainer}>
                <img src="/bell3.svg" alt="" srcSet="" />
              </div>
              <div
                className={styles.userProfile}
                onClick={() => setShowMenu(true)}
              >
                <div className={styles.avatar}></div>
                <div className={styles.name}>
                  <p>Adedeji</p>
                  <img src="/chevrondown.svg" alt="" srcSet="" />
                </div>

                {showMenu && <Menu type="profile" setShowMenu={setShowMenu} />}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
