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
    emptyStarColor: "transparent"
  });
  return (
    <>
      <div className="grid-cols-4 grid">
        {product?.map((productItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img w-full h-40">
                  <img src={productItems.image} className="w-full h-full" />
                  <div className="product-like">
                    <label>{productItems.rating.count}</label> <br />
                    {/* <i className='fa-regular fa-heart' onClick={increment}></i> */}
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate mt-5 mx-5">
                    <DynamicStar
                      rating={parseFloat(productItems.rating.rate)}
                      width={parseFloat(star.width)}
                      height={parseFloat(star.height)}
                      outlined={
                        star.outlinedColor ? star.outlinedColor : star.outlined
                      }
                      totalStars={star.totalStars}
                      sharpnessStar={star.sharpness}
                      fullStarColor={star.fullStarColor}
                      emptyStarColor={star.emptyStarColor}
                    />
                  </div>
                  <p>{productItems.category}</p>
                  <div className="price">
                    <h4>${productItems.price} </h4>
                    <button
                      onClick={() => {
                        addCart(productItems);
                        // toast("Item added into Cart");
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
      </div>

     
    </>
  );
};

export default FakeProduct;
