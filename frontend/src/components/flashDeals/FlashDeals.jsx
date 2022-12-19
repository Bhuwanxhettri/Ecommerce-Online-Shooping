import React from "react";
import FlashCard from "./FlashCard";
import FakeProduct from "./FakeProduct";
import "./style.css";

const FlashDeals = () => {
  return (
    <>
      {/* <section className="flash"> */}
        <div className="container">
          <FlashCard />

          <FakeProduct />
        </div>
      {/* </section> */}
    </>
  );
};

export default FlashDeals;
