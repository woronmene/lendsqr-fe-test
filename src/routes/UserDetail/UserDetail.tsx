import React, { useState, useEffect } from "react";
import styles from "./UserDetail.module.scss";
import { getUserById } from "../../utils/users";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import UserCard from "../../components/UserCard/UserCard";

// type UserDetailProps = {

// };

const UserDetail: React.FC = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    async function fetchUser() {
      const user = await getUserById(userId as any);
      console.log(user);
      setUser(user.profile.firstName);

      //   console.log(JSON.stringify(users[0]));

      //   setUsers(users);
    }

    // fetchUser();
  }, []);

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
        <UserCard />
      </div>
    </div>
  );
};
export default UserDetail;
