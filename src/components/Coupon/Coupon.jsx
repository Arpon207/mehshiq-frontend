import { useState } from "react";
import "./coupon.css";
import { IoIosArrowDown } from "react-icons/io";

const Coupon = () => {
  const [openCoupon, setOpenCoupon] = useState(false);

  return (
    <div className="couponCode">
      <div
        className="couponCode-button"
        onClick={() => setOpenCoupon(!openCoupon)}
      >
        <h3>Coupon Code</h3>
        <IoIosArrowDown
          className={`counponIcon ${openCoupon && "icon-rotate"}`}
        />
      </div>
      <div
        className={`couponCode-input ${openCoupon && "couponCode-input-open"}`}
      >
        <input type="text" name="" id="" />
        <button>APPlY</button>
      </div>
    </div>
  );
};

export default Coupon;
