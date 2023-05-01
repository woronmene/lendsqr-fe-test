import React from "react";
import styles from "./InfoSection.module.scss";
import DetailItem from "../DetailItem/DetailItem";
import { User } from "../../utils/users";

type InfoSectionProps = {
  heading: string;
  fields: { field: string; key: string }[];
  user: User | undefined;
};

const InfoSection: React.FC<InfoSectionProps> = ({ heading, fields, user }) => {
  return (
    <div className={styles.infoSection}>
      <p className={styles.header}>{heading}</p>
      <div className={styles.details}>
        {/* <DetailItem  /> */}

        <div className={styles.detailItem}>
          <p className={styles.field}></p>
          <p className={styles.value}>Grace Effiom</p>
        </div>
        {/* {fields.map((field, i) => (
          <DetailItem field={field} user={user} />
        ))} */}
      </div>
    </div>
  );
};
export default InfoSection;
