import React from "react";
import styles from "./Badge.module.scss";

type BadgeVariant = "inactive" | "active" | "blacklisted" | "pending";

interface BadgeProps {
  variant: BadgeVariant;
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ variant, label }) => {
  return <div className={`${styles.badge} ${styles[variant]}`}>{label}</div>;
};

export default Badge;
