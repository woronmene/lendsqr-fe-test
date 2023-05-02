import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import Login from "./routes/Login/Login.tsx";
import "./styles/main.scss";
import Root from "./routes/Root/Root.tsx";
// import Users from "./routes/Users/Users.tsx";
import UserDetail from "./routes/UserDetail/UserDetail.tsx";
import Users from "./routes/Users/Users.tsx";
import { UsersProvider } from "./context/UsersContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      // {
      //   path: "users/",
      //   element: <Users />,
      // },
      {
        path: "Users/:userId",
        element: <UserDetail />,
      },
      {
        path: "/:page",
        element: <Users />,
      },
    ],
  },
  // {
  //   path: "/users",
  //   element: <p>Users page</p>,
  // },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  </React.StrictMode>
);
