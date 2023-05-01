import React from "react";
import styles from "./OverviewCard.module.scss";
// type OverviewCardProps = {

// };

const OverviewCard: React.FC = () => {
  return (
    <div className={styles.overviewCard}>
      <div className={styles.container}>
        <img src="/Icons/usersDashboardIcon.svg" alt="" />
        <p className={styles.field}>Users</p>
        <p className={styles.value}>2,453</p>
      </div>
    </div>
  );
};
export default OverviewCard;
