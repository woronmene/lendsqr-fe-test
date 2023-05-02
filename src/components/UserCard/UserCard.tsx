import React, { useState } from "react";
import styles from "./UserCard.module.scss";
import TabContent from "../TabContent/TabContent";
import { tabs } from "../../utils/constants";
import { User } from "../../utils/users";

type UserCardProps = {
  user: User | undefined;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
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
              <div
                className={styles.avatar}
                style={{
                  backgroundImage: `url(${user?.profile.avatar})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {/* <img src="/Icons/profileIcon.svg" alt="" /> */}
                {/* <img src={user?.profile.avatar} alt="" /> */}
              </div>
              <div className={styles.name}>
                <p
                  className={styles.fullName}
                >{`${user?.profile.firstName}  ${user?.profile.lastName}`}</p>
                <p className={styles.id}>{user?.accountNumber}</p>
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
              <p className={styles.amount}>₦{`${user?.accountBalance}`}</p>
              <p className={styles.accountDetails}>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className={styles.tabNav}>
            {tabs.map((tab, index) => (
              <div
                key={tab.text}
                className={`${styles.tabNavItem} ${
                  activeTabIndex === index ? styles.active : styles.inActive
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.text}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.tabContentCard}>
          <TabContent user={user} activeTabIndex={activeTabIndex} />
        </div>
      </div>
    </div>
  );
};
export default UserCard;
