import React from "react";
import styles from "./DetailItem.module.scss";

// type DetailItemProps = {

// };

const DetailItem: React.FC = () => {
  return (
    <div className={styles.detailItem}>
      <p className={styles.field}>FULL NAME</p>
      <p className={styles.value}>Grace Effiom</p>
    </div>
  );
};
export default DetailItem;
