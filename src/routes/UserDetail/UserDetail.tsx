import React, { useState, useEffect } from "react";
import { getUserById } from "../../utils/users";
import { useParams } from "react-router-dom";

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

  return <div style={{ margin: "0 auto" }}>{user}</div>;
};
export default UserDetail;
