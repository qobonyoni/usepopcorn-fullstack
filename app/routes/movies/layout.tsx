import React from "react";
import { Outlet } from "react-router";
import Navbar from "~/ui/components/Navbar";

function MovieLayout() {
    return <>
        <Navbar/>
        <main>
        <Outlet/>
            
        </main>
      
  </>;
}

export default MovieLayout;
