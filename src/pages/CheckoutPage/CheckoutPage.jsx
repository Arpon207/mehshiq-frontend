import { useState } from "react";
import Coupon from "../../components/Coupon/Coupon";
import "./checkoutPage.css";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import BillingDetails from "../../components/BillingDetails/BillingDetails";

const CheckoutPage = () => {
  const [division, setDivision] = useState("Dhaka");
  const { products, subtotal } = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const navigate = useNavigate();
  const product = useLocation().state;

  const selectedProducts = product ? [product] : products;

  const shippingCharge = division === "Dhaka" ? 80 : 150;

  const finalSubTotal = product ? product.price * product.quantity : subtotal;

  const onSubmit = (data) => console.log(data);

  return (
    <div className="checkoutPage">
      <div className="cartPage-header">
        <div>
          <h1>Checkout</h1>
          <p>Home &gt; Checkout</p>
        </div>
      </div>
      <div className="checkoutPage-container">
        <BillingDetails
          onSubmit={onSubmit}
          division={division}
          setDivision={setDivision}
        />
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
              {selectedProducts.map(({ title, price, quantity }) => (
                <div className="orderedProduct">
                  <p>
                    {title.length > 15 ? title.slice(0, 15) + "..." : title}{" "}
                    <RxCross2 /> {quantity}
                  </p>
                  <p>BDT {price * quantity}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="cartPage-subtotal">
            <h3>Subtotal</h3>
            <h3>BDT {finalSubTotal}</h3>
          </div>
          <hr />
          <div className="shipping">
            <div>
              <h3>Shipping</h3>
              <h3>BDT {shippingCharge}</h3>
            </div>
            <div className="shippingCharge">
              <li>
                Inside Dhaka <strong>BDT 80</strong>
              </li>
              <li>
                Outside Dhaka <strong>BDT 150</strong>
              </li>
            </div>
          </div>
          <hr />
          <div className="cartPage-total">
            <h3>Total: </h3>
            <h3>BDT {finalSubTotal + parseInt(shippingCharge)}</h3>
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
