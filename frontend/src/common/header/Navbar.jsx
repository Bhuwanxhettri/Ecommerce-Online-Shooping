import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const isauth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <nav class="nav font-semibold text-lg">
          <ul class="flex items-center">
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                <Link to="/">Home</Link>
            </li>
            {isauth == "true" && (
                <>
                  <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                    <Link to="/orderHistory">Order List</Link>
                  </li>
                </>
              )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
