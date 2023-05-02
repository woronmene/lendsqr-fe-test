import React from "react";
import styles from "./ErrorPage.module.scss";

// type ErrorPageProps = {

// };

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.errorPage}>
      <p>PAGE NOT FOUND</p>
      <div className={styles.imageContainer}>
        <img src="/login.png" alt="" />
      </div>
    </div>
  );
};
export default ErrorPage;
