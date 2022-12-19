import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reduxSlice/addtoCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data,product2 } from "./product";
import { DynamicStar } from "react-dynamic-star";
const FakeProduct = () => {
  // const [product,setProduct]= useState();
  const product = data;
  const Productdata = product2;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItem);
  const addCart = (productItmes) => {
    let tempCartItem = cart?.filter((item) => {
      if (item._id == productItmes._id) return item;
    });
    if (tempCartItem.length == 0) {
      dispatch(addToCart(productItmes));
    } else {
      let tempProduct = { ...tempCartItem[0] };
      tempProduct.price += productItmes.price;
      let tempCart = cart?.filter((item) => {
        if (tempCartItem[0]?._id != item._id) return item;
      });
      tempCart = [...tempCart, tempProduct];
      dispatch(addToCart(tempCart));
    }
  };
  // const fakeProudct = ()=>{
  //    fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>setProduct(json))
  // }
  // useEffect(()=>{
  //  fakeProudct();
  // },[])
  const [star, setStar] = useState({
    totalStars: 5,
    sharpness: 2.5,
    width: 25,
    height: 100,
    outlined: true,
    outlinedColor: "",
    fullStarColor: "#FFBC00",
    emptyStarColor: "transparent",
  });
  return (
    <>
      <div className="grid-cols-4 grid">
        {product?.map((productItems) => {
          return (
            <div class="overflow-hidden rounded-2xl bg-gray-50">
              <div class="flex items-center h-[180px] overflow-hidden">
                <img src={productItems.image} alt="Hamburger" />
              </div>

              <div class="p-6">
                <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                  <div>
                    <p class="text-gray-400">Online • Product</p>
                    <h2 class="mt-2 text-lg font-semibold text-gray-800">
                      {productItems.title}
                    </h2>
                  </div>
                </div>

                <hr class="mt-4 mb-4" />

                <div class="flex flex-wrap justify-between">
                  <p class="inline-flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 stroke-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>

                    <span class="ml-2"> 5.0 (2.5k) </span>
                  </p>
                  <button
                    onClick={() => {
                      addCart(productItems);
                    }}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <section class=" w-full relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center sm:text-left">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
                Let us find your
                <strong class="block font-extrabold text-rose-700">
                  Forever Home.
                </strong>
              </h1>

              <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
            </div>
          </div>
        </section>

        {Productdata?.map((productItems) => {
          return (
            <div class="overflow-hidden rounded-2xl bg-gray-50">
              <div class="flex items-center h-[180px] overflow-hidden">
                <img src={productItems.image} alt="Hamburger" />
              </div>

              <div class="p-6">
                <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                  <div>
                    <p class="text-gray-400">Online • Product</p>
                    <h2 class="mt-2 text-lg font-semibold text-gray-800">
                      {productItems.title}
                    </h2>
                  </div>
                </div>

                <hr class="mt-4 mb-4" />

                <div class="flex flex-wrap justify-between">
                  <p class="inline-flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 stroke-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>

                    <span class="ml-2"> 5.0 (2.5k) </span>
                  </p>
                  <button
                    onClick={() => {
                      addCart(productItems);
                    }}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FakeProduct;
