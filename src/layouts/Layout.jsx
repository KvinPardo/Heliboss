import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="">
      <div>
        <Sidebar />
      </div>

      <main className="w-full p-10 md:h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
