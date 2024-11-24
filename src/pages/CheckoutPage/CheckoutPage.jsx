import { useState } from "react";
import Coupon from "../../components/Coupon/Coupon";
import "./checkoutPage.css";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import BillingDetails from "../../components/BillingDetails/BillingDetails";

const CheckoutPage = () => {
  const [shippingCharge, setShippingCharge] = useState(100);
  const { products, subtotal } = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="checkoutPage">
      <div className="cartPage-header">
        <h1>Checkout</h1>
        <p>Home &gt; Checkout</p>
      </div>
      <div className="checkoutPage-container">
        <BillingDetails onSubmit={onSubmit} />
        <div className="cartDetails">
          <Coupon />
          <hr />
          <div className="yourProducts">
            <h3>Your Order</h3>
            <div className="orderedProducts">
              <div className="orderedProducts-header">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              {products.map(({ title, price, quantity }) => (
                <div className="orderedProduct">
                  <p>
                    {title} <RxCross2 /> {quantity}
                  </p>
                  <p>$ {price * quantity}</p>
                </div>
              ))}
            </div>
          </div>
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
          <hr />
          <div className="paymentMethod">
            <h3>Payment Method</h3>
            <div>
              <input
                type="radio"
                name="cashOnDelivery"
                id="cashOnDelivery"
                value={"Cash on delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="cashOnDelivery">Cash on delivery</label>
            </div>
          </div>
          <hr />
          <div className="checkout-termsCondition">
            <p>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our <span>privacy policy</span>.
            </p>
            <div>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={(e) => setIsTermsChecked(e.target.checked)}
              />
              <label htmlFor="terms">
                I have read and agree to the website{" "}
                <span>terms and conditions</span> *
              </label>
            </div>
          </div>
          <button
            disabled={!isTermsChecked}
            className="cartDetails-checkout-btn"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
