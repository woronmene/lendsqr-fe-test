import React, { useState } from "react";
import styles from "./TableRow.module.scss";
import Badge from "../Badge/Badge";
import Menu from "../Menu/Menu";
import { User } from "../../utils/users";
import { formatDate } from "../../utils/table";
import { truncateString } from "../../utils/table";

type TableRowProps = {
  user: User;
};

const TableRow: React.FC<TableRowProps> = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <tr>
      <td>{truncateString(user.orgName)}</td>
      <td>{truncateString(user.userName)}</td>
      <td>{truncateString(user.email)}</td>
      <td>{truncateString(user.phoneNumber)}</td>
      <td>{formatDate(user.createdAt)}</td>
      <td>
        <Badge variant="inactive" label="Inactive" />
      </td>

      <div className={styles.moreIcon}>
        <img
          src="/Icons/moreIcon.svg"
          alt=""
          onClick={() => {
            console.log("clicked");
            setShowMenu(true);
          }}
        />

        {showMenu && <Menu user={user} setShowMenu={setShowMenu} />}
      </div>
    </tr>
  );
};
export default TableRow;
