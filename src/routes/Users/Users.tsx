import React, { useState, useEffect, useContext } from "react";
import styles from "./Users.module.scss";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { User } from "../../utils/users";
import OverviewCard from "../../components/OverviewCard/OverviewCard";

import { tableHeaderData } from "../../utils/constants";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableRow from "../../components/TableRow/TableRow";
import Pagination from "../../components/Pagination/Pagination";
import UsersContext from "../../context/UsersContext";
import { overviewData } from "../../utils/constants";

// type UsersProps = {
//   test: string;
// };

const Users: React.FC = () => {
  // const [users, setUsers] = useState<User[]>([]);

  // const navigate = useNavigate();
  const { page } = useParams();
  const { sliceUsersList } = useContext(UsersContext);

  if (page === "Users") {
    return (
      <div className={styles.users}>
        <div className={styles.container}>
          <div className={styles.reviewCards}>
            {overviewData.map((card) => (
              <OverviewCard
                key={card.field}
                image={card.image}
                field={card.field}
                value={card.value}
              />
            ))}
          </div>

          <div className={styles.tableContainer}>
            <div className={styles.usersTable}>
              <table>
                <thead>
                  <tr>
                    {tableHeaderData.map((header) => (
                      <TableHeader key={header} header={header} />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sliceUsersList &&
                    sliceUsersList.map((user: User) => (
                      <TableRow user={user} key={user.id} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            style={{
              padding: "20px 0",
              paddingBottom: "100px",
              // border: "1px solid red",
            }}
          >
            <Pagination />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ margin: "0 auto" }}>
        We'll notify you as sooon as {page} is available
      </div>
    );
  }
};
export default Users;
