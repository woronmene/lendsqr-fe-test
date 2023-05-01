import React from "react";
import styles from "./OverviewCard.module.scss";
type OverviewCardProps = {
  image: string;
  field: string;
  value: string;
};

const OverviewCard: React.FC<OverviewCardProps> = ({ image, field, value }) => {
  return (
    <div className={styles.overviewCard}>
      <div className={styles.container}>
        <img src={image} alt="" />
        <p className={styles.field}>{field}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};
export default OverviewCard;
