import React from "react"
import "./style.css"
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react"
import { useState } from "react"
import {  removeFromCart } from '../../reduxSlice/addtoCart'
import Khalti from "../../components/khalti/Khalti"

const Cart = () => {
  const isauth = useSelector((state) => state.auth.isLoggedIn);
  const cart = JSON.parse(localStorage.getItem("cart"));
  localStorage.setItem("cartLength",cart.length)
  const cartLength = localStorage.getItem("cartLength");
  const dispatch = useDispatch()
  const [total,setTotalPrice] = useState(0);
  useEffect(()=>{
    const totalPrice = ()=>{
          cart?.map((cartitem)=>{
             setTotalPrice( (prevState) => prevState +cartitem.price)
          })
    }
    totalPrice()
  },[])
  
  const removeCart = (cartitem)=>{
     const removeCart =  cart.filter((item)=>{
          if(item._id !== cartitem._id){
               return item;
          }
      })
      dispatch(removeFromCart(removeCart))
  }

  return (
    <>
      <section className='cart-items flex mx-10'>
        <div className="w-9/12">
        {
          cart?.map((cartitem)=>{
             return(
              <>
                <div className='container d_flex'>
                    <div className='cart-details'>
                    <div className='cart-list product d_flex'>
                            <div className='img'>
                              <img src={cartitem.image} alt='img' />
                            </div>
                            <div className='cart-details'>
                              <h3>{cartitem.name}</h3>
                              <h4 className="mx-2">
                                ${cartitem.price}.00
                              </h4>
                            </div>
                            <div className='cart-items-function'>
                              <div className='removeCart'>
                                <button className='removeCart' onClick={()=>{removeCart(cartitem)}}>
                                  <i className='fa-solid fa-xmark'></i>
                                </button>
                              </div>
                            </div>
                          </div>
                    </div>
               </div>
              </>
             )
          })
        }
        </div>
          <div className='cart-total product py-5 '>
                      <h2>Cart Summary</h2>
                      <div className=' d_flex '>
                        <h4>Total Price :</h4>
                        <h3>${total}.00</h3>
                        {
                          ((isauth =="true") && (cartLength>0) )?<><Khalti/></>:""
                        }
                        
                      </div>
          </div>
      </section>

    </>
  )
}

export default Cart
