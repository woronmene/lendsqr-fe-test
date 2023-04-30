import React, { useState } from "react";
import styles from "./UserCard.module.scss";
import TabContent from "../TabContent/TabContent";
import { tabs } from "../../utils/constants";

// type UserCardProps = {

// };

const UserCard: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };
  return (
    <div className={styles.userCard}>
      <div className={styles.container}>
        <div className={styles.topCard}>
          <div className={styles.detailsSection}>
            <div className={styles.avatarSection}>
              <div className={styles.avatar}>
                <img src="/Icons/profileIcon.svg" alt="" />
              </div>
              <div className={styles.name}>
                <p className={styles.fullName}>Grace Effiom</p>
                <p className={styles.id}>LSQFf587g90</p>
              </div>
            </div>

            <hr className={styles.horizontalRule} />

            <div className={styles.tier}>
              <p>User’s Tier</p>

              <div className={styles.rating}>
                <img src="/Icons/filledStarIcon.svg" alt="" srcSet="" />
                <img src="/Icons/outlineStarIcon.svg" alt="" srcSet="" />
                <img src="/Icons/outlineStarIcon.svg" alt="" srcSet="" />
              </div>
            </div>

            <hr className={styles.horizontalRule} />

            <div className={styles.account}>
              <p className={styles.amount}>₦200,000.00</p>
              <p className={styles.accountDetails}>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className={styles.tabNav}>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`${styles.tabNavItem} ${
                  activeTabIndex === index ? styles.active : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.text}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.tabContentCard}>
          <TabContent activeTabIndex={activeTabIndex} />
        </div>
      </div>
    </div>
  );
};
export default UserCard;
