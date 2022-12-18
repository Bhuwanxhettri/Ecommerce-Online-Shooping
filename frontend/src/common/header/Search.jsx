import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../auth/authSlice";
import { toast } from "react-toastify";

const Search = () => {
  const dispatch = useDispatch();
  const CartItem = useSelector((state) => state.cart.cartItem);
  const isauth = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {/* <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <h1 className="text-center">
              {" "}
              <span className="text-red-600 text-2xl mx-2">Online</span>shooping
            </h1>
          </div>

          <div className="icon f_flex width">
            {isauth == "true" ? (
              <> <button onClick={()=>{dispatch(userLogout());toast("Logout Sucessfully")}} type="button" className="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Logout</button></>
            ) : (
              <>
                <Link to="/login">
                  <i className="fa fa-user icon-circle cursor-pointer"></i>
                </Link>
              </>
            )}
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem?.length === 0 ? "" : CartItem?.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section class=" mx-auto  sticky top-0 z-50 ">
        <nav class="flex justify-between bg-gray-900 text-white">
          <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <a class="text-3xl font-bold font-heading" href="#">
              Online Store
            </a>

            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"></ul>
            <div class="hidden xl:flex  space-x-5 items-center">
              <Link class="flex items-center hover:text-gray-200" to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="flex absolute -mt-5 ml-4">
                  {CartItem?.length === 0 ? (
                    ""
                  ) : (
                    <span class="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-pink-400 opacity-75"></span>
                  )}
                  <span class="relative inline-flex rounded-full h-5 w-5 text-white text-xs py-1 text-center px-1.5 font-bold  bg-pink-500">
                    {CartItem?.length === 0 ? "" : CartItem?.length}
                  </span>
                </span>
              </Link>

              {isauth == "true" ? (
                <>
                  <button
                    onClick={() => {
                      dispatch(userLogout());
                      toast("Logout Sucessfully");
                    }}
                    type="button"
                    className="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    class="flex items-center hover:text-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 hover:text-gray-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Search;
