import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";

export default function Layout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
