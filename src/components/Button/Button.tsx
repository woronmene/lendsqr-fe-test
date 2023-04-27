import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "outline" | "solid";
  color?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color = "#333",
  onClick,
  children,
}) => {
  const buttonStyles =
    variant === "outline" ? styles.outlineButton : styles.solidButton;

  return (
    <button
      className={`${buttonStyles} ${styles.button}`}
      style={{ color, borderColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
