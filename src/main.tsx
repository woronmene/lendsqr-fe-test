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
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:page",
    element: <Users />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Users/:userId",
    element: <UserDetail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  </React.StrictMode>
);
