import { requestService } from "../../../services/requestsService";
import styles from "./Seller.module.scss";

export const Seller = () => {
  const requests = requestService.getRequests();

  return (
    <div>
      {requests.length ? (
        requests.map((request) => (
          <div key={request.id} className={styles.request}>
            <div>{request.name}</div>
            <div>{request.category}</div>
          </div>
        ))
      ) : (
        <div>Нет созданных запросов</div>
      )}
    </div>
  );
};
