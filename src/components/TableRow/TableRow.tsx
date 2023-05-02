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
    // let activeState: string;

    if (year < 2023) {
      // activeState = "Blacklist";
      return <Badge variant="blacklisted" label="Blacklisted" />;
    } else if (year > 2023 && year < 2050) {
      // activeState = "Inactive";
      return <Badge variant="inactive" label="Inactive" />;
    } else if (year > 2050 && year < 2065) {
      // activeState = "Pending";
      return <Badge variant="pending" label="Pending" />;
    } else {
      // activeState = "Active";
      return <Badge variant="active" label="Active" />;
    }
  }

  // const activeUsers = () => {
  //   if (year < 2023) {
  //     activeState = "Blacklist";
  //   } else if (year > 2023 && year < 2050) {
  //     activeState = "Inactive";
  //   } else if (year > 2050 && year < 2065) {
  //     activeState = "Pending";
  //   } else {
  //     activeState = "Active";
  //   }
  //   return activeState;
  // };

  return (
    <tr>
      <td>{truncateString(user.orgName)}</td>
      <td>{truncateString(user.userName)}</td>
      <td>{truncateString(user.email)}</td>
      <td>{truncateString(user.phoneNumber)}</td>
      <td>{formatDate(user.createdAt)}</td>
      <td>
        {/* <Badge variant="inactive" label="Inactive" /> */}
        {checkActiveStatus(user.lastActiveDate)}
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

        {showMenu && <Menu type="row" user={user} setShowMenu={setShowMenu} />}
      </div>
    </tr>
  );
};
export default TableRow;
