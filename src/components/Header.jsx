import React, { useEffect, useState } from "react";
import Logo from "/img/logoheliboss.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.screenY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-white py-8"
      } fixed z-50 w-full transition-all duration-300 `}
    >
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <a href="/" className="text-white">
          <img src={Logo} alt="" className="w-[160px]" />
        </a>

        {/* nav */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
