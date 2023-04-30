import React from "react";
import styles from "./InfoSection.module.scss";
import DetailItem from "../DetailItem/DetailItem";

// type InfoSectionProps = {

// };

const InfoSection: React.FC = () => {
  return (
    <div className={styles.infoSection}>
      <p className={styles.header}>Personal Information</p>
      <div className={styles.details}>
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
      </div>
    </div>
  );
};
export default InfoSection;
