import React from "react";
import styles from "./DetailItem.module.scss";
import { User } from "../../utils/users";

type DetailItemProps = {
  field: string;
  user: User | undefined;
};

const DetailItem: React.FC<DetailItemProps> = ({ field, user }) => {
  return (
    <div className={styles.detailItem}>
      <p className={styles.field}>{field}</p>
      <p className={styles.value}>Grace Effiom</p>
    </div>
  );
};
export default DetailItem;
