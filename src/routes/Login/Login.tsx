import React from "react";
import styles from "./Login.module.scss";
import InputComponent from "../../components/Input/InputComponent";
import Button from "../../components/Button/Button";

// type LoginProps = {

// };

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles.logoContainer}>
        <img src="/logo.svg" alt="" srcSet="" />
      </div>
      <div className={styles.leftSection}>
        <div className={styles.imageContainer}>
          <img src="/login.svg" alt="" srcSet="" />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.content}>
          <p className={styles.heading}>Welcome!</p>
          <p className={styles.secondaryText}>Enter details to login.</p>
          <div className={styles.inputGroup}>
            <InputComponent type="email" placeholder="Email" />
            <InputComponent type="password" placeholder="Password" />
          </div>
          <p className={styles.forgotPassword}>FORGOT PASSWORD?</p>
          {/* <InputComponent type="search" placeholder="Search" /> */}
          {/* <Button
            variant="outline"
            color="#f00"
            onClick={() => console.log("Button clicked")}
          >
            Outline Button
          </Button> */}
          <Button
            variant="solid"
            color="#fff"
            onClick={() => console.log("Button clicked")}
          >
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
