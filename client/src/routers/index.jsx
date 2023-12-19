import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import Layout from "../components/Layout";
import HomePage from "../views/HomePage";
import ProfilePage from "../views/ProfilePage";
import AddProduct from "../views/AddProduct";
import EditProduct from "../views/EditProduct";

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
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => {
          return !sessionStorage.access_token ? redirect("/login") : null;
        },
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        loader: () => {
          return !sessionStorage.access_token ? redirect("/login") : null;
        },
      },
      {
        path: "/addProduct",
        element: <AddProduct /> ,
        loader: () => {
          return !sessionStorage.access_token ? redirect("/login") : null;
        },
      },
      {
        path: "/editProduct/:productId",
        element: <EditProduct /> ,
        loader: () => {
          return !sessionStorage.access_token ? redirect("/login") : null;
        },
      },
    ],
    loader: () => {
      return !sessionStorage.access_token ? redirect("/login") : null;
    },
  },
]);

export default router;
