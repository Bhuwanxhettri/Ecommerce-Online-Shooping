import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reduxSlice/addtoCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data } from "./product";
import { DynamicStar } from "react-dynamic-star";
const FakeProduct = () => {
  // const [product,setProduct]= useState();
  const product = data;
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
            <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
               <div className="img w-full h-40">
                  <img src={productItems.image} className="w-full h-full" />
                  <div className="product-like">
                    <label>{productItems.rating.count}</label> <br />
                    {/* <i className='fa-regular fa-heart' onClick={increment}></i> */}
                  </div>
                </div>
              <div class="flex justify-between items-center">
                <div>
                  <h1 class="mt-5 text-md font-semibold">{productItems.title}</h1>
                  <hr />
                  <p class="mt-2">${productItems.price}</p>
                </div>
              </div>
              <button
                     onClick={() => {
                      addCart(productItems);

                    }}
                   class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
                    Add to Cart
                  </button>
            </div>
          );
        })}
              

            </div>

       


     


    </>
  );
};

export default FakeProduct;


