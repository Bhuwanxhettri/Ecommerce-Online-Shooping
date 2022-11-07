import React, { useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect } from "react"
import { flashDeals } from "../../services/userApi/apiCall"
import {useDispatch } from 'react-redux'
import { addToCart } from '../../reduxSlice/addtoCart'


const FlashCard = () => {
  const dispatch = useDispatch()
  const [product,setProducts] = useState();
  useEffect(()=>{
       const fetchData = async()=>{
           const flashProducts = await flashDeals();
           setProducts(flashProducts.products);
       }
       fetchData();
  },[])

  return (
    <>
        <div className="flex">
            {product?.map((productItems) => {
              return (
                <div className='box'>
                  <div className='product mtop'>
                    <div className='img w-full h-40'>
                      <img src={productItems.image} className="w-full h-full" />
                      <div className='product-like'>
                        <label>{productItems.Stock}</label> <br />
                        {/* <i className='fa-regular fa-heart' onClick={increment}></i> */}
                      </div>
                    </div>
                    <div className='product-details'>
                      <h3>{productItems.name}</h3>
                      {/* <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div> */}
                      <p>{productItems.description}</p>
                      <div className='price'>
                        <h4>${productItems.price}.00 </h4>
                        <button onClick={()=>dispatch(addToCart(productItems))}>
                            <i className='fa fa-plus'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
    </>
  )
}

export default FlashCard
