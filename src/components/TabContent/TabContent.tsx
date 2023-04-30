import React from "react";
import styles from "./TabContent.module.scss";
import { tabs } from "../../utils/constants";
import InfoSection from "../InfoSection/InfoSection";

type TabContentProps = {
  activeTabIndex: number;
};

const TabContent: React.FC<TabContentProps> = ({ activeTabIndex }) => {
  if (activeTabIndex === 0) {
    return (
      <div className={styles.tabContent}>
        <InfoSection />
        <hr className={styles.horizontalRule} />
        <InfoSection />
        <hr className={styles.horizontalRule} />
        <InfoSection />

        <hr className={styles.horizontalRule} />
      </div>
    );
  } else {
    return (
      <div>
        We'll notify you as soon as {tabs[activeTabIndex].text} is available{" "}
      </div>
    );
  }
};
export default TabContent;
