import { useState } from "react";
import Coupon from "../../components/Coupon/Coupon";
import "./checkoutPage.css";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import BillingDetails from "../../components/BillingDetails/BillingDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Lib/firebase.config";
import { makeRequest } from "../../axios";
import { resetCart } from "../../redux/cartReducer";
import { TailSpin } from "react-loader-spinner";

const CheckoutPage = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [shippingCharge, setShippingCharge] = useState(80);
  const { products, subtotal } = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const product = useLocation().state;
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const selectedProducts = product ? [product] : products;

  // const shippingCharge =
  //   selectedDistrict === "Dhaka" || selectedDistrict === "" ? 80 : 150;

  const finalSubTotal = product ? product.price * product.quantity : subtotal;

  const onSubmit = async (data) => {
    setIsloading(true);
    const orderDetails = {
      userDetails: user
        ? {
            userEmail: user.email,
            userName: user.displayName,
          }
        : {},
      products: selectedProducts,
      customerName: data.name,
      customerPhone: data.phone,
      customerEmail: data.email,
      ShippingDivision: data.division,
      shippingDistrict: data.district,
      shippingArea: data.area,
      paymentMethod: paymentMethod,
      shippingCharge,
      additionalComment: data.additionalComment,
      subtotal: finalSubTotal,
    };

    const { data: { result } = {} } = await makeRequest.post(
      "/orders/create",
      orderDetails
    );
    if (result) {
      setIsloading(false);
      dispatch(resetCart());
      navigate("/order-submitted", {
        state: result,
      });
    }
    setIsloading(false);
  };

  console.log(selectedDistrict);

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
          setSelectedDivision={setSelectedDivision}
          setDistricts={setDistricts}
          districts={districts}
          selectedDivision={selectedDivision}
          setSelectedDistrict={setSelectedDistrict}
          selectedDistrict={selectedDistrict}
          setShippingCharge={setShippingCharge}
        />
        <div className="cartDetails">
          <Coupon />
          <hr />
          <div className="yourProducts">
            <h3>Your Order</h3>
            <div className="orderedProducts">
              <div className="orderedProducts-header">
                <p>Image</p>
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              {selectedProducts.map(({ title, price, quantity, variant }) => (
                <div className="orderedProduct">
                  <img src={variant.image.url} alt="" />
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
                defaultChecked={true}
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
            type="submit"
            form="orderFrom"
            disabled={!isTermsChecked || isLoading}
            className={`cartDetails-checkout-btn`}
          >
            {isLoading && (
              <TailSpin
                visible={isLoading}
                height="15"
                width="15"
                color="#00000099"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
            {isLoading ? "Please Wait" : "Confirm Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
