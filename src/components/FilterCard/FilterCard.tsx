/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import styles from "./FilterCard.module.scss";
import Button from "../Button/Button";

type FilterCardProps = {
  setShowFilterCard: (arg0: boolean) => void;
};

const FilterCard: React.FC<FilterCardProps> = ({ setShowFilterCard }) => {
  const filterCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // add event listener on mount
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);

    // remove event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event: MouseEvent) {
    if (
      filterCardRef.current &&
      !filterCardRef.current.contains(event.target as Node)
    ) {
      // click occurred outside of the menu, so close the menu
      // replace with your code to close the menu

      setShowFilterCard(false);
    }
  }

  return (
    <div className={styles.filterCard} ref={filterCardRef}>
      <form action="">
        <div className={styles.formItem}>
          <label>Organization</label>
          <select placeholder="Select">
            <option value="Select">Select</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <label>Username</label>
          <input type="text" placeholder="User" />
        </div>
        <div className={styles.formItem}>
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className={styles.formItem}>
          <label>Date</label>
          <select className={styles.datePicker}>
            <option value="some">Date</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <label>Phone number</label>
          <input type="text" placeholder="Phone number" />
        </div>
        <div className={styles.formItem}>
          <label>Status</label>
          <select value="Select" placeholder="Select">
            <option value="some">Select</option>
          </select>
        </div>

        <div className={styles.buttonGroup}>
          <Button
            size="smaller"
            variant="outline"
            color="rgba(84, 95, 125, 0.9)"
          >
            Reset
          </Button>
          <Button size="smaller" variant="solid" color="#fff">
            Filter
          </Button>
        </div>
      </form>
    </div>
  );
};
export default FilterCard;
