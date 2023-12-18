import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      return sessionStorage.access_token ? redirect("/") : null;
    },
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: () => {
      return sessionStorage.access_token ? redirect("/") : null;
    },
  },
]);

export default router;
