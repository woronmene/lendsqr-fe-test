// import React from "react";
// import { useParams } from "react-router-dom";

// // type PageProps = {

// // };

// const Page: React.FC = () => {
//   const { page } = useParams();

//   return <div style={{ margin: "0 auto" }}>{page}</div>;
// };
// export default Page;

import React, { useState, useEffect } from "react";
import styles from "./Page.module.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getAllUsers, User } from "../../utils/users";

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
        {users.map((user) => (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            {user.profile.firstName}
          </p>
        ))}
      </div>
    );
  } else {
    return <div style={{ margin: "0 auto" }}>{page}</div>;
  }
};
export default Users;
