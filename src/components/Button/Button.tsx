import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "outline" | "solid";
  size: string;
  color?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color = "#333",
  onClick,
  children,
  size,
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
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Button;
