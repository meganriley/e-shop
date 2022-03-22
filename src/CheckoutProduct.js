import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
        <img src="https://m.media-amazon.com/images/I/91IeBCV202L._AC_SX679_.jpg" alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">SAMIAH LUXE Chunky Knit Blanket 50x60 Buttercream</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>108</strong>
            </p>
            <div className="checkoutProduct__rating">
            ⭐⭐⭐
            </div>
            <button>Remove from Basket</button>
        </div>
    </div>
  );
}

export default CheckoutProduct;
