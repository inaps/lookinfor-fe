import { Button } from "../uikit/Button";
import { userService } from "../../services/userService";
import { useAppSelector } from "../../store/hooks";
import { isAuthorizedUser } from "../../store/user/getters";
import styles from "./Header.module.scss";
import { Icon, IconSize } from "../uikit/Icon";
import { ReactComponent as IconMain } from "../../assets/icons/main.svg";

export const Header = () => {
  const isAuthorized = useAppSelector(isAuthorizedUser);

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Icon iconComponent={IconMain} size={IconSize.Icon24} />
        <span className={styles.text}>ИЩУ</span>
      </div>
      {isAuthorized && (
        <Button secondary onClick={userService.logout}>
          Выход
        </Button>
      )}
    </header>
  );
};
