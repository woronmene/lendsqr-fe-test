/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import { User, getAllUsers } from "../utils/users";

const UsersContext = createContext<any>({} as any);

const UsersProvider = ({ children }: any) => {
  const [users, setUsers] = useState<User[]>([]);
  const [text, setText] = useState<string>("100");
  const [isLoading, setIsLoading] = useState(true);

  const [buttonTextContent, setButtonTextContext] = useState(1);

  useEffect(() => {
    const fetchUsersAPI = async () => {
      const data = await getAllUsers();

      setUsers(data);
      localStorage.setItem("users", JSON.stringify(data));

      setIsLoading(false);
    };

    fetchUsersAPI();
  }, []);

  const handleClick = (event: any) => {
    const text = event.currentTarget.textContent;
    setButtonTextContext(+text);
  };

  const goPreviousPage = () => {
    if (buttonTextContent > 1) {
      setButtonTextContext((prev) => {
        return prev - 1;
      });
    }
  };

  const goNextPage = () => {
    if (buttonTextContent < users.length / +text) {
      setButtonTextContext((prev) => {
        return prev + 1;
      });
    } else if (buttonTextContent > users.length / +text) {
      return setButtonTextContext(2);
    }
  };

  let sliceUsersList: User[];
  if (buttonTextContent === 1 || buttonTextContent > users.length / +text) {
    sliceUsersList = users.slice(0, +text);
  } else {
    sliceUsersList = users.slice(
      (buttonTextContent - 1) * +text,
      buttonTextContent * +text
    );
  }

  const pages = Math.ceil(users?.length / sliceUsersList.length) + 1;

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Loading...
      </div>
    );
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        text,
        buttonTextContent,
        sliceUsersList,
        setText,
        handleClick,
        goPreviousPage,
        goNextPage,
        pages,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
export { UsersProvider };
