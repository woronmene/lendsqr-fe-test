import React from "react";
import styles from "./TabContent.module.scss";
import {
  personalInformationFields,
  educationAndEmploymentFields,
  socialsFields,
  tabs,
} from "../../utils/constants";
import InfoSection from "../InfoSection/InfoSection";
import { User } from "../../utils/users";

type TabContentProps = {
  activeTabIndex: number;
  user: User | undefined;
};

const TabContent: React.FC<TabContentProps> = ({ activeTabIndex, user }) => {
  if (activeTabIndex === 0) {
    return (
      <div className={styles.tabContent}>
        <InfoSection
          heading="Personal Information"
          user={user}
          fields={personalInformationFields}
        />
        <hr className={styles.horizontalRule} />
        <InfoSection
          heading="Education and Employment"
          user={user}
          fields={educationAndEmploymentFields}
        />
        <hr className={styles.horizontalRule} />
        <InfoSection heading="Socials" user={user} fields={socialsFields} />

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
