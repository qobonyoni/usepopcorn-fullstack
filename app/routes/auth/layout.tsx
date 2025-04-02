import React from "react";
import { Outlet } from "react-router";
import Header from "~/ui/components/Header";

function layout() {
  return <>
      <Header/>
      <Outlet/>
  </>;
}

export default layout;
