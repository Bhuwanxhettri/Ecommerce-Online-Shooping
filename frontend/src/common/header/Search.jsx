import React from "react";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { userLogout } from "../auth/authSlice";
import { toast } from "react-toastify";
const Search = () => {
  const dispatch = useDispatch()
  const CartItem = useSelector((state) => state.cart.cartItem);
  const isauth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <section className="search bg-teal-500">
        <div className="container c_flex">
          <div className="logo width ">
            <h1 className="text-center text-white">
              {" "}
              <span className="font-semibold text-xl tracking-tight"></span> Online Shooping
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
      </section>
    </>
  );
};

export default Search;
