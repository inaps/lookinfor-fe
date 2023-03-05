import React from "react";
import styles from "./Root.module.scss";
import { Outlet } from "react-router-dom";
import { AuthorizationLayer } from "../AuthorizationLayer";
import { Header } from "../../Header/Header";

export const Root = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>
        <AuthorizationLayer />
        <Outlet />
      </div>
    </div>
  );
};
