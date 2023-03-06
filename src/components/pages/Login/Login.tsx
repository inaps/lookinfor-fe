import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Button } from "../../uikit/Button";
import { userService } from "../../../services/userService";
import { CustomerLoginModal } from "./CustomerLoginModal";

export const Login = () => {
  const [isCustomerLoginModalVisible, setIsCustomerLoginModalVisible] = useState(false);

  const handleCustomerLogin = () => {
    setIsCustomerLoginModalVisible(true);
  };

  const closeCustomerLoginModal = () => {
    setIsCustomerLoginModalVisible(false);
  };

  return (
    <>
      <div className={styles.login}>
        <Button primary onClick={handleCustomerLogin}>
          Войти
        </Button>
        <Button text className={styles.buttonSellerLogin} onClick={userService.loginSeller}>
          Войти как продавец
        </Button>
      </div>
      {isCustomerLoginModalVisible && <CustomerLoginModal onClose={closeCustomerLoginModal} />}
    </>
  );
};
