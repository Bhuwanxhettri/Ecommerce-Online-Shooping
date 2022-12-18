import React,{useState,useEffect} from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './KhaltiConfig';

const Khalti = () => {
 let checkout = new KhaltiCheckout(config);

  return (
    <>
       <button className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md   focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{ checkout.show({amount:20000});}}>Buy</button>
    </>
  )
}

export default Khalti