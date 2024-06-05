import "./whatWeOffer.css";

import delivery from "../../../assets/icons/delivery-truck.png";
import returnDe from "../../../assets/icons/exchange.png";
import premium from "../../../assets/icons/premium.png";

const WhatWeOffer = () => {
  return (
    <div className="whatWeOffer container">
      <h3>What We Offer</h3>
      <div className="whatWeOffer-container">
        <div className="special1">
          <p>Premium Quality</p>
          <img src={premium} alt="" />
          <p>Experience luxury with every purchase</p>
        </div>
        <div className="special2">
          <p>Fast Delivery</p>
          <img src={returnDe} alt="" />
          <p>Get your order with-in 3-7 days</p>
        </div>
        <div className="special3">
          <p>Easy Return</p>
          <img src={delivery} alt="" />
          <p>Easy return with oney back guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
