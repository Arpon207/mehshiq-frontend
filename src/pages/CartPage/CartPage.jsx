import { IoIosArrowDown } from "react-icons/io";
import "./cartPage.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import Coupon from "../../components/Coupon/Coupon";

const CartPage = () => {
  const [shippingCharge, setShippingCharge] = useState(100);
  const { products, subtotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cartPage">
      <div className="cartPage-header">
        <div>
          <h1>Cart</h1>
          <p>Home &gt; Cart</p>
        </div>
      </div>
      <div className="cartPage-container">
        <div className="cartProducts-container">
          <div className="cartProducts-header">
            <p>Image</p>
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="cartProducts">
            {products.map(({ img, title, price, quantity, _id }, i) => (
              <div key={i}>
                <div className="cartProduct">
                  <img src={img} alt="" />
                  <div className="cartProduct-details">
                    <strong>{title}</strong>
                    <p>$ {price}</p>
                  </div>
                  <div className="cartProduct-counter">
                    <button
                      disabled={quantity === 1}
                      onClick={() => dispatch(decreaseQuantity(_id))}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => dispatch(increaseQuantity(_id))}>
                      +
                    </button>
                  </div>
                  <strong>$ {price * quantity}</strong>
                </div>
                {products.length === i + 1 ? "" : <hr />}
              </div>
            ))}
          </div>
        </div>
        <div className="cartDetails">
          <Coupon />
          <hr />
          <div className="cartPage-subtotal">
            <h3>Subtotal</h3>
            <h3>$ {subtotal}</h3>
          </div>
          <hr />
          <div className="shipping">
            <h3>Shipping</h3>
            <div className="shipping-option">
              <div>
                <input
                  type="radio"
                  name="shipping"
                  id="insideDhaka"
                  value={100}
                  onChange={(e) => setShippingCharge(e.target.value)}
                  defaultChecked
                />
                <label htmlFor="insideDhaka">Inside Dhaka</label>
              </div>
              <strong>100</strong>
            </div>
            <div className="shipping-option">
              <div>
                <input
                  type="radio"
                  name="shipping"
                  id="outsideDhaka"
                  value={150}
                  onChange={(e) => setShippingCharge(e.target.value)}
                />
                <label htmlFor="outsideDhaka">Outside Dhaka</label>
              </div>
              <strong>150</strong>
            </div>
          </div>
          <hr />
          <div className="cartPage-total">
            <h3>Total: </h3>
            <h3>$ {subtotal + parseInt(shippingCharge)}</h3>
          </div>
          <button
            className="cartDetails-checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
