import { useLocation } from "react-router-dom";
import "./orderConfirmation.css";
import moment from "moment";
import { useEffect } from "react";

const OrderConfirmation = () => {
  const result = useLocation().state;
  let subTotal = 0;
  result.products.forEach((item) => {
    subTotal += item.quantity * item.price;
  });

  useEffect(() => {
    window.history.pushState(null, "", "/");
  }, []);
  return (
    <div className="orderConfirmation">
      <div className="OrderCorfirmationBillingDetails">
        <h2>Thank you!</h2>
        <p>
          <strong>Thank you</strong> for choosing us. We appreciate your trust{" "}
          <br /> and we will all provide the best according to your
          expectations. <br /> and we would love to see our products used. plase
          tag us on your social media.
        </p>
        <div>
          <h3>Billing Address</h3>
          <p>
            Name: <strong>{result.customerName}</strong>
          </p>
          <p>
            Address:{" "}
            <strong>
              {result.shippingArea +
                ", " +
                result.shippingDistrict +
                ", " +
                result.ShippingDivision}
            </strong>
          </p>
          <p>
            Phone: <strong>{"+880" + result.customerPhone}</strong>
          </p>
          {result?.customerEmail && (
            <p>
              Email: <strong>{result.customerEmail}</strong>
            </p>
          )}
        </div>
      </div>
      <div className="OrderSummary">
        <h3>Order Summary</h3>
        <div className="orderSummaryHeader">
          <div>
            <p>Date</p>
            <strong>{moment(result.createdAt).format("ll")}</strong>
          </div>
          <div>
            <p>Order Id</p>
            <strong>{result.orderId}</strong>
          </div>
          <div>
            <p>Payment Method</p>
            <strong>{result.paymentMethod}</strong>
          </div>
        </div>
        <hr />
        <div className="orderSummaryProducts">
          {result.products.map((product) => (
            <div>
              <img src={product.variant.url} alt="" />
              <div>
                <strong>{product.title}</strong>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <strong>BDT {product.price * product.quantity}</strong>
            </div>
          ))}
        </div>
        <hr />
        <p>
          Sub Total : <strong> BDT {subTotal}</strong>
        </p>
        <p>
          Shipping : <strong>BDT {result.shippingCharge}</strong>
        </p>
        <strong>Order Total : BDT {subTotal + result.shippingCharge}</strong>
      </div>
    </div>
  );
};

export default OrderConfirmation;
