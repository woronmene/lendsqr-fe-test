import React, { ChangeEvent, useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/Input/InputComponent";
import Button from "../../components/Button/Button";

// type LoginProps = {

// };

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Email and password cannot be empty");
    } else {
      setIsLoading(true);

      setTimeout(() => {
        navigate("/Users");
        setIsLoading(false);
      }, 3000);

      // Perform login operation
    }
  };

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
      <form onSubmit={handleSubmit} className={styles.rightSection}>
        <div className={styles.content}>
          <p className={styles.heading}>Welcome!</p>
          <p className={styles.secondaryText}>Enter details to login.</p>
          <div className={styles.inputGroup}>
            <InputComponent
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <InputComponent
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>
          <p className={styles.forgotPassword}>FORGOT PASSWORD?</p>

          <Button variant="solid" size="large" color="#fff" type="submit">
            {isLoading ? "LOGGING IN..." : "LOG IN"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
