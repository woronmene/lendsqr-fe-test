import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "outline" | "solid";
  size: string;
  color?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color = "#333",
  onClick,
  children,
  size,
  type,
}) => {
  const buttonStyles =
    variant === "outline" ? styles.outlineButton : styles.solidButton;

  const sizeClass =
    size === "large"
      ? styles.large
      : size === "small"
      ? styles.small
      : size === "smaller"
      ? styles.smaller
      : "";

  return (
    <button
      className={`${buttonStyles} ${styles.button} ${sizeClass}`}
      style={{ color, borderColor: color }}
      onClick={onClick}
      type={type && type}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Button;
