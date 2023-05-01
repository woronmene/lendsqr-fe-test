import React, { useState, useEffect } from "react";
import styles from "./UserDetail.module.scss";
import { getUserById } from "../../utils/users";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import UserCard from "../../components/UserCard/UserCard";
import { User } from "../../utils/users";

// type UserDetailProps = {

// };

const UserDetail: React.FC = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserFromLocalStorage = (id: string): User | undefined => {
      const usersFromLocalStorage = localStorage.getItem("users");
      if (usersFromLocalStorage) {
        const users: User[] = JSON.parse(usersFromLocalStorage);
        return users.find((user) => user.id === id);
      }
      return undefined;
    };

    async function fetchUser() {
      const user = await getUserById(userId as string);
      console.log(user);
      setUser(user);

      //   console.log(JSON.stringify(users[0]));

      //   setUsers(users);
    }

    const userFromLocalStorage = localStorage.getItem("users");

    if (userFromLocalStorage) {
      setUser(getUserFromLocalStorage(userId as string));
      // setUsers(JSON.parse(usersFromLocalStorage));
      setIsLoading(false);
    } else {
      fetchUser();
    }

    // Check if users are already in local storage
    const usersFromLocalStorage = localStorage.getItem("users");
    if (usersFromLocalStorage) {
      getUserFromLocalStorage(userId as string);
      // setUsers(JSON.parse(usersFromLocalStorage));
      setIsLoading(false);
    } else {
      fetchUser();
    }

    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.userDetails}>
      <div className={styles.container}>
        <div className={styles.backButton}>
          <img src="/Icons/backIcon.svg" alt="" srcSet="" />
          <p>Back to Users</p>
        </div>
        <div className={styles.headingSection}>
          <p>User Details</p>

          <div className={styles.buttonGroup}>
            <Button
              variant="outline"
              color="#E4033B"
              size="small"
              onClick={() => console.log("Button clicked")}
            >
              BLACKLIST USER
            </Button>
            <Button
              variant="outline"
              color="#39CDCC"
              size="small"
              onClick={() => console.log("Button clicked")}
            >
              ACTIVATE USER
            </Button>
          </div>
        </div>
        <UserCard user={user} />
      </div>
    </div>
  );
};
export default UserDetail;
