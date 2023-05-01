import React, { useState, useEffect } from "react";
import styles from "./Users.module.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getAllUsers, User } from "../../utils/users";
import OverviewCard from "../../components/OverviewCard/OverviewCard";
import Badge from "../../components/Badge/Badge";
import Menu from "../../components/Menu/Menu";

// type UsersProps = {
//   test: string;
// };

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    async function fetchUsers() {
      const users = await getAllUsers();
      //   console.log(JSON.stringify(users[0]));
      console.log(users);

      setUsers(users);
    }

    // fetchUsers();
  }, []);

  if (page === "Users") {
    return (
      <div className={styles.users}>
        {/* {users.map((user) => (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            {user.profile.firstName}
          </p>
        ))} */}
        <div className={styles.container}>
          <div className={styles.reviewCards}>
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
          </div>

          <div className={styles.tableContainer}>
            <div className={styles.usersTable}>
              <table>
                <thead>
                  <tr>
                    <th>
                      <p>ORGANIZATION</p>
                      <img src="/Icons/filterIcon.svg" alt="" />
                    </th>
                    <th>
                      <p>USERNAME</p>
                      <img src="/Icons/filterIcon.svg" alt="" />
                    </th>
                    <th>
                      {" "}
                      <p>EMAIL</p>
                      <img src="/Icons/filterIcon.svg" alt="" />
                    </th>
                    <th>
                      {" "}
                      <p>PHONE NUMBER</p>
                      <img src="/Icons/filterIcon.svg" alt="" />
                    </th>
                    <th>
                      {" "}
                      <p>DATE JOINED</p>
                      <img src="/Icons/filterIcon.svg" alt="" />
                    </th>
                    <th>
                      <p>STATUS</p>
                      <img src="/Icons/filterIcon.svg" alt="" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="inactive" label="Inactive" />
                    </td>

                    <img
                      className={styles.moreIcon}
                      src="/Icons/moreIcon.svg"
                      alt=""
                    />
                  </tr>
                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="active" label="Active" />
                    </td>
                    <img
                      className={styles.moreIcon}
                      src="/Icons/moreIcon.svg"
                      alt=""
                    />
                  </tr>
                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="blacklisted" label="Blacklisted" />
                    </td>
                    <img
                      className={styles.moreIcon}
                      src="/Icons/moreIcon.svg"
                      alt=""
                    />
                  </tr>
                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="pending" label="Pending" />
                    </td>
                    <img
                      className={styles.moreIcon}
                      src="/Icons/moreIcon.svg"
                      alt=""
                    />
                  </tr>
                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="blacklisted" label="Blacklisted" />
                    </td>
                    <img
                      className={styles.moreIcon}
                      src="/Icons/moreIcon.svg"
                      alt=""
                    />
                  </tr>
                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="pending" label="Pending" />
                    </td>
                    <div className={styles.moreIcon}>
                      <img src="/Icons/moreIcon.svg" alt="" />

                      <Menu />
                    </div>
                  </tr>
                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="inactive" label="Inactive" />
                    </td>
                    <div className={styles.moreIcon}>
                      <img src="/Icons/moreIcon.svg" alt="" />
                    </div>
                  </tr>
                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="blacklisted" label="Blacklisted" />
                    </td>
                    <div className={styles.moreIcon}>
                      <img src="/Icons/moreIcon.svg" alt="" />
                    </div>
                  </tr>

                  <tr>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>Lendsqr</td>
                    <td>
                      <Badge variant="active" label="Active" />
                    </td>
                    <div className={styles.moreIcon}>
                      <img src="/Icons/moreIcon.svg" alt="" />
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ padding: "100px" }}>badge</div>
        </div>
      </div>
    );
  } else {
    return <div style={{ margin: "0 auto" }}>{page}</div>;
  }
};
export default Users;
