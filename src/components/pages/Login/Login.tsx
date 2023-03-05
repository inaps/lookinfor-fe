import React from "react";
import styles from "./Login.module.scss";
import { Button } from "../../uikit/Button";
import { userService } from "../../../services/userService";

export const Login = () => {
  return (
    <div className={styles.login}>
      <Button primary onClick={userService.loginCustomer}>
        Войти
      </Button>
      <Button text className={styles.buttonSellerLogin} onClick={userService.loginSeller}>
        Войти как продавец
      </Button>
    </div>
  );
};
