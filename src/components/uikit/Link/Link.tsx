import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Link.module.scss";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const Link: React.FC<Props> = ({ to, children }) => {
  return (
    <RouterLink className={styles.link} to={to}>
      {children}
    </RouterLink>
  );
};
