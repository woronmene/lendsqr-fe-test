import React from "react";
import styles from "./InfoSection.module.scss";
import DetailItem from "../DetailItem/DetailItem";
import { User } from "../../utils/users";

type InfoSectionProps = {
  heading: string;
  fields: string[];
  user: User | undefined;
};

const InfoSection: React.FC<InfoSectionProps> = ({ heading, fields, user }) => {
  return (
    <div className={styles.infoSection}>
      <p className={styles.header}>{heading}</p>
      <div className={styles.details}>
        {/* <DetailItem  /> */}
        {fields.map((field) => (
          <DetailItem field={field} user={user} />
        ))}
      </div>
    </div>
  );
};
export default InfoSection;
