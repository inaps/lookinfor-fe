import { Button } from "../../uikit/Button";
import { requestService } from "../../../services/requestsService";
import styles from "./Admin.module.scss";
import { Link } from "../../uikit/Link/Link";
import { ROUTES } from "../../../constants/routes";

export const Admin = () => {
  return (
    <div className={styles.admin}>
      <Link to={ROUTES.ROOT}>На главную</Link>
      <div className={styles.buttons}>
        <Button primary onClick={requestService.setMockData}>
          Задать тестовые данные
        </Button>
        <Button secondary onClick={requestService.resetMockData}>
          Сбросить данные
        </Button>
      </div>
    </div>
  );
};
