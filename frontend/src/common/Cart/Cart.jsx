import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { removeFromCart } from "../../reduxSlice/addtoCart";
import Khalti from "../../components/khalti/Khalti";

const Cart = () => {
  const isauth = useSelector((state) => state.auth.isLoggedIn);
  const cart = JSON.parse(localStorage.getItem("cart"));
  localStorage.setItem("cartLength", cart.length);
  const cartLength = localStorage.getItem("cartLength");
  const dispatch = useDispatch();
  const [total, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalPrice = () => {
      cart?.map((cartitem) => {
        setTotalPrice((prevState) => prevState + cartitem.price);
      });
    };
    totalPrice();
  }, []);

  const removeCart = (cartitem) => {
    const removeCart = cart.filter((item) => {
      if (item._id !== cartitem._id) {
        return item;
      }
    });
    dispatch(removeFromCart(removeCart));
  };

  return (
    <>
      <section className="cart-items flex mx-10">
        <div className="cart-total product py-5 ">
          <h2>Cart Summary</h2>
          <div className=" d_flex ">
            <h4>Total Price :</h4>
            <h3>${parseInt(total)}</h3>
            {isauth == "true" && cartLength > 0 ? (
              <>
                <Khalti />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-9/12">
          {cart?.map((cartitem) => {
            return (
              <>
                <div class="col-span-9 space-y-4 my-2 bg-white">
                  <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div class="w-28">
                      <img
                        src={cartitem.image}
                        alt="product 6"
                        class="w-full"
                      />
                    </div>
                    <div class="w-1/3">
                      <h2 class="text-gray-800 text-xl font-medium uppercase">
                        {cartitem.title}
                      </h2>
                      <p class="text-gray-500 text-sm">
                        Availability:{" "}
                        <span class="text-green-600">In Stock</span>
                      </p>
                    </div>
                    <div class="text-red-600 text-lg font-semibold">
                      ${parseInt(cartitem.price)}.00
                    </div>

                    <button
                      onClick={() => {
                        removeCart(cartitem);
                      }}
                      class="text-gray-600 cursor-pointer hover:text-primary"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cart;
