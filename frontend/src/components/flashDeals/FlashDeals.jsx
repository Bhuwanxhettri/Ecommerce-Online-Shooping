import React from "react"
import FlashCard from "./FlashCard"
import FakeProduct from "./FakeProduct"
import "./style.css"

const FlashDeals = () => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Delas</h1>
          </div>
          <FakeProduct/>
          <FlashCard/>
        </div>
      </section>
    </>
  )
}

export default FlashDeals
