import { Button } from "../uikit/Button";
import { userService } from "../../services/userService";
import { useAppSelector } from "../../store/hooks";
import { isAuthorizedUser } from "../../store/user/getters";
import styles from "./Header.module.scss";

export const Header = () => {
  const isAuthorized = useAppSelector(isAuthorizedUser);

  return (
    <header className={styles.header}>
      <span className={styles.title}>ИЩУ</span>
      {isAuthorized && (
        <Button secondary onClick={userService.logout}>
          Выход
        </Button>
      )}
    </header>
  );
};
