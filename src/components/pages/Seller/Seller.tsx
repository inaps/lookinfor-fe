import { requestService } from "../../../services/requestsService";
import { RequestsTable } from "./RequestsTable/RequestsTable";

export const Seller = () => {
  const requests = requestService.getRequests();

  if (!requests.length) {
    return <div>Нет созданных запросов</div>;
  }

  return (
    <div>
      <RequestsTable requests={requests} />
    </div>
  );
};
