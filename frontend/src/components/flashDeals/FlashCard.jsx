import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { flashDeals } from "../../services/userApi/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reduxSlice/addtoCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner from "./Banner.jpg";
const FlashCard = () => {
  const dispatch = useDispatch();
  const [product, setProducts] = useState();
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
  useEffect(() => {
    const fetchData = async () => {
      const flashProducts = await flashDeals();
      setProducts(flashProducts.products);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex py-5 ">
        <div className="px-5">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            width={400}
          >
            {product?.map((productItems) => {
              return (

                <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                   src={productItems.image}
                    alt="wallpaper"
                  />

                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <span class="ml-1 text-sm text-slate-400">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">{productItems.name}</h2>
                  <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-orange-500">
                      ${productItems.price}.00
                      </span>
                    </p>
                    <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
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
              </div>
              );
            })}
          </Carousel>
        </div>

        <div className=" w-full h-80 bg-slate-700">
          <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
              <div class="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                <div class="flex flex-col justify-center md:w-1/2">
                  <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                    Best Deal
                  </h1>
                  <p class="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
                    Save upto <span class="font-bold">50%</span>
                  </p>
                </div>
                <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                  <img
                    src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
                    alt=""
                    class=""
                  />
                </div>
              </div>
              <div class="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                <div class="flex flex-col justify-center">
                  <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                    Game Console
                  </h1>
                  <p class="text-base lg:text-xl text-gray-800 dark:text-white">
                    Save Upto <span class="font-bold">30%</span>
                  </p>
                </div>
                <div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                  <img
                    src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
                    alt=""
                    class="md:w-20 md:h-20 lg:w-full lg:h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCard;
