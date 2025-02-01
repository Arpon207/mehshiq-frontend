import { useForm } from "react-hook-form";
import "./orderStatus.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderTracking = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const phone = data.phone;
    const orderId = data.orderId;
    const { data: order } = await axios.get(
      `http://localhost:5000/api/orders/track?phone=${phone}&orderId=${orderId}`
    );
    console.log(order);
    if (order) {
      setIsLoading("false");
      navigate(`/order-tracking/${order.orderId}`, {
        state: order,
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="orderStatus">
      <div className="cartPage-header">
        <div>
          <h1>Order Tracking</h1>
          <p>Home &gt; Order Tracking</p>
        </div>
      </div>
      <div className="order-status-form-container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputWrapper">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              {...register("phone", { required: true })}
              placeholder="Phone you used during checkout."
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="orderId">Order ID</label>
            <input
              id="orderId"
              type="number"
              {...register("orderId", { required: true })}
              placeholder="Order ID"
            />
          </div>
          <button type="submit">{isLoading ? "Tracking..." : "Track"}</button>
        </form>
      </div>
    </div>
  );
};

export default OrderTracking;
