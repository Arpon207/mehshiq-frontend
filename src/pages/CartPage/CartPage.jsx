import "./cartPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import Coupon from "../../components/Coupon/Coupon";
import { MdDeleteOutline } from "react-icons/md";
import emptyCart from "../../assets/icons/shopping.png";

const CartPage = () => {
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
      {products.length > 0 ? (
        <div className="cartPage-container">
          <div className="cartProducts-container">
            <div className="cartProducts-header">
              <p>Image</p>
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
              <p>Action</p>
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
                    <button
                      onClick={() => dispatch(removeItem({ _id }))}
                      className="cartPage-delete-Item"
                    >
                      <MdDeleteOutline />
                    </button>
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
            <div className="shippingCharge">
              <strong>Delivery Charge will be add on checkout Page.</strong>
              <li>
                Inside Dhaka <strong>BDT 80</strong>
              </li>
              <li>
                Outside Dhaka <strong>BDT 150</strong>
              </li>
            </div>
            <hr />
            <button
              className="cartDetails-checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="cartPage-empty">
          <img src={emptyCart} alt="" />
          <h3>Your cart is empty</h3>
          <p>
            Looks like you have not added anything to your cart. Go ahead &
            explore our collections.
          </p>
          <button onClick={() => navigate("/collections")}>
            Explore Our Collection
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
