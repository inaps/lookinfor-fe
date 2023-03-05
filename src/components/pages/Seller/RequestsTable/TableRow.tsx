import React from "react";
import { Request } from "../../../../types/common";
import styles from "./RequestsTable.module.scss";

type Props = {
  request: Request;
};
export const TableRow: React.FC<Props> = ({ request }) => {
  return (
    <tr>
      <td className={styles.tableRowCell}>{request.name}</td>
      <td className={styles.tableRowCell}>{request.category}</td>
      <td className={styles.tableRowCell}>{request.contacts}</td>
    </tr>
  );
};
