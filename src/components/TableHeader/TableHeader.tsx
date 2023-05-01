import React, { useState } from "react";
import styles from "./TableHeader.module.scss";
import FilterCard from "../FilterCard/FilterCard";

type TableHeaderProps = {
  header: string;
  //   setShowFilterCard: (showFilterCard: boolean) => void;
  //   showFilterCard: boolean;
};

const TableHeader: React.FC<TableHeaderProps> = ({ header }) => {
  const [showFilterCard, setShowFilterCard] = useState<boolean>(false);

  return (
    <th>
      <p>{header}</p>

      <div
        className={styles.filterIcon}
        onClick={() => setShowFilterCard(true)}
      >
        <img src="/Icons/filterIcon.svg" alt="" />
        {showFilterCard && <FilterCard setShowFilterCard={setShowFilterCard} />}
      </div>
    </th>
  );
};
export default TableHeader;
