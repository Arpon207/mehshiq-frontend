import "./cart.css";
import CartSlider from "./CartSlider";
import cart_icon from "../../assets/icons/shopping-bag.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart } from "../../redux/cartReducer";

const Cart = () => {
  const { isCartOpen } = useSelector((state) => state.cartVisibility);
  const dispatch = useDispatch();

  useEffect(() => {
    isCartOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isCartOpen]);

  return (
    <div className="cart">
      <div
        onClick={() => dispatch(closeCart())}
        className={`overlay ${isCartOpen ? "overlayShow" : "overlayHide"}`}
      ></div>
      <div className="nav-cart">
        <button className="cart-btn" onClick={() => dispatch(openCart())}>
          <img src={cart_icon} alt="" />
          <span>{/* {subtotal().quantity} */}</span>
        </button>
      </div>
      <div className="cartSlider-container">
        <CartSlider />
      </div>
    </div>
  );
};

export default Cart;
