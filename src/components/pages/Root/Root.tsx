import React from "react";
import { Button } from "../../uikit/Button";
import styles from "./Root.module.scss";
import { userService } from "../../../services/userService";
import { useAppSelector } from "../../../store/hooks";
import { getUser } from "../../../store/user/getters";

export const Root = () => {
  const user = useAppSelector(getUser);
  console.log(user);

  return (
    <div className={styles.root}>
      <div className={styles.loginRole}>
        <Button onClick={userService.loginCustomer}>Войти</Button>
        <Button type="text" className={styles.buttonSellerLogin} onClick={userService.loginSeller}>
          Войти как продавец
        </Button>
      </div>
    </div>
  );
};
