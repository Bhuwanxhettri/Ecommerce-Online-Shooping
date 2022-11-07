import React from "react"
import FlashDeals from "../components/flashDeals/FlashDeals"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  )
}

export default Pages
