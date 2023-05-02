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

  function checkActiveStatus(date: string): JSX.Element {
    const year = new Date(date).getFullYear();

    if (year < 2023) {
      return <Badge variant="blacklisted" label="Blacklisted" />;
    } else if (year > 2023 && year < 2050) {
      return <Badge variant="inactive" label="Inactive" />;
    } else if (year > 2050 && year < 2065) {
      return <Badge variant="pending" label="Pending" />;
    } else {
      return <Badge variant="active" label="Active" />;
    }
  }

  return (
    <tr>
      <td>{truncateString(user.orgName)}</td>
      <td>{truncateString(user.userName)}</td>
      <td>{truncateString(user.email)}</td>
      <td>{truncateString(user.phoneNumber)}</td>
      <td>{formatDate(user.createdAt)}</td>
      <td>{checkActiveStatus(user.lastActiveDate)}</td>

      <div className={styles.moreIcon}>
        <img
          src="/Icons/moreIcon.svg"
          alt=""
          onClick={() => {
            setShowMenu(true);
          }}
        />

        {showMenu && <Menu type="row" user={user} setShowMenu={setShowMenu} />}
      </div>
    </tr>
  );
};
export default TableRow;
