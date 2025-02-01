import { useParams } from "react-router-dom";
import "./orderStatus.css";

const OrderStatus = () => {
  const { orderId } = useParams();
  return (
    <div className="orderStatus">
      <div className="cartPage-header">
        <div>
          <h1>Your Order</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
