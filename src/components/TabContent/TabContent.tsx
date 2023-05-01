import React from "react";
import styles from "./TabContent.module.scss";
import {
  // personalInformationFields,
  // educationAndEmploymentFields,
  // socialsFields,
  tabs,
} from "../../utils/constants";
// import InfoSection from "../InfoSection/InfoSection";
import { User } from "../../utils/users";

type TabContentProps = {
  activeTabIndex: number;
  user: User | undefined;
};

const TabContent: React.FC<TabContentProps> = ({ activeTabIndex, user }) => {
  if (activeTabIndex === 0) {
    return (
      <div className={styles.tabContent}>
        {/* <InfoSection
          heading="Personal Information"
          user={user}
          fields={personalInformationFields}
        />
        <hr className={styles.horizontalRule} />
        <InfoSection
          heading="Education and Employment"
          user={user}
          fields={educationAndEmploymentFields}
        /> */}

        <div className={styles.infoSection}>
          <p className={styles.header}>Personal Information</p>
          <div className={styles.details}>
            {/* <DetailItem  /> */}

            <div className={styles.detailItem}>
              <p className={styles.field}>FULL NAME</p>
              <p
                className={styles.value}
              >{`${user?.profile.firstName} ${user?.profile.lastName}`}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>PHONE NUMBER</p>
              <p className={styles.value}>{user?.phoneNumber}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>EMAIL ADDRESS</p>
              <p className={styles.value}>{user?.email}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>BVN</p>
              <p className={styles.value}>{user?.profile.bvn}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>GENDER</p>
              <p className={styles.value}>{user?.profile.gender}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>MARITAL STATUS</p>
              <p className={styles.value}>Married</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>CHILDREN</p>
              <p className={styles.value}>None</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>TYPE OF RESIDENCE</p>
              <p className={styles.value}>Apartment</p>
            </div>
          </div>
        </div>
        <hr className={styles.horizontalRule} />

        <div className={styles.infoSection}>
          <p className={styles.header}>Education and Employment</p>
          <div className={styles.details}>
            {/* <DetailItem  /> */}

            <div className={styles.detailItem}>
              <p className={styles.field}>LEVEL OF EDUCATION</p>
              <p className={styles.value}>{user?.education.level}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>EMPLOYMENT STATUS</p>
              <p className={styles.value}>{user?.education.employmentStatus}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>SECTOR OF EMPLOYMENT</p>
              <p className={styles.value}>{user?.education.sector}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>DURATION OF EMPLOYMENT</p>
              <p className={styles.value}>{user?.education.duration}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>OFFICE EMAIL</p>
              <p className={styles.value}>{user?.education.officeEmail}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>MONTHLY INCOME</p>
              <p className={styles.value}>{user?.education.monthlyIncome}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>LOAN REPAYMENT</p>
              <p className={styles.value}>{user?.education.loanRepayment}</p>
            </div>
          </div>
        </div>
        <hr className={styles.horizontalRule} />

        <div className={styles.infoSection}>
          <p className={styles.header}>Socials</p>
          <div className={styles.details}>
            {/* <DetailItem  /> */}

            <div className={styles.detailItem}>
              <p className={styles.field}>TWITTER</p>
              <p className={styles.value}> {user?.socials.twitter}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>FACEBOOK</p>
              <p className={styles.value}>{user?.socials.facebook}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>INSTAGRAM</p>
              <p className={styles.value}>{user?.socials.instagram}</p>
            </div>
          </div>
        </div>
        <hr className={styles.horizontalRule} />

        <div className={styles.infoSection}>
          <p className={styles.header}>Guarantor</p>
          <div className={styles.details}>
            {/* <DetailItem  /> */}

            <div className={styles.detailItem}>
              <p className={styles.field}>FULL NAME</p>
              <p
                className={styles.value}
              >{`${user?.guarantor.firstName} ${user?.guarantor.lastName}`}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>PHONE NUMBER</p>
              <p className={styles.value}>{user?.guarantor.phoneNumber}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>EMAIL ADDRESS</p>
              <p className={styles.value}>{user?.guarantor.address}</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.field}>RELATIONSHIP</p>
              <p className={styles.value}>Siblings</p>
            </div>
          </div>
        </div>

        {/* <hr className={styles.horizontalRule} /> */}

        {/* <InfoSection heading="Socials" user={user} fields={socialsFields} /> */}
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
