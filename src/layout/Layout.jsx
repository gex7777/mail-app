import React from "react";
import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../components/CustomAppBar/CustomAppBar";
import { CustomDrawer } from "../components/CustomDrawer/CustomDrawer";

const Layout = () => {
  return (
    <>
      {" "}
      <PrimarySearchAppBar />
      <CustomDrawer>
        <Outlet />
      </CustomDrawer>
    </>
  );
};

export default Layout;
