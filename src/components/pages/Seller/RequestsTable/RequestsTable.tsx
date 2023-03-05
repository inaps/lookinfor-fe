import { Request } from "../../../../types/common";
import React from "react";
import { TableRow } from "./TableRow";
import styles from "./RequestsTable.module.scss";

type Props = {
  requests: Array<Request>;
};

export const RequestsTable: React.FC<Props> = ({ requests }) => (
  <table>
    <thead>
      <tr>
        <th className={styles.tableHeaderCell}>Название</th>
        <th className={styles.tableHeaderCell}>Категория</th>
        <th className={styles.tableHeaderCell}>Клиент</th>
      </tr>
    </thead>
    <tbody>
      {requests.map((request) => (
        <TableRow key={request.id} request={request} />
      ))}
    </tbody>
  </table>
);
