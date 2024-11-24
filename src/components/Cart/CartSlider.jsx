import { useDispatch, useSelector } from "react-redux";
import "./cartSlider.css";
import {
  closeCart,
  removeItem,
  subTotalCounter,
} from "../../redux/cartReducer";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const CartSlider = ({ isOpen, setIsOpen }) => {
  const { products, subtotal } = useSelector((state) => state.cart);
  const { isCartOpen } = useSelector((state) => state.cartVisibility);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(subTotalCounter());
  }, [products, dispatch]);
  return (
    <>
      <div className={`cartSlider ${isCartOpen && "showSlider"}`}>
        <div className="cartSlider-top">
          <div>
            <div className="cartSlider-header">
              <h2>Cart</h2>
              <button onClick={() => dispatch(closeCart())}>
                <RxCross2 />
              </button>
            </div>
            <hr />
          </div>
          <div className="cart-products">
            {products.map(({ title, price, quantity, img, _id }, i) => (
              <div className="cart-product" key={i}>
                <img src={img} alt="" />
                <div>
                  <strong>{title}</strong>
                  <p>
                    {quantity} * {price}$
                  </p>
                </div>

                <button
                  className="nav-cart-delete-btn"
                  onClick={() => dispatch(removeItem({ _id }))}
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="cartSlider-bottom">
          <div className="subtotal">
            <h4>Subtotal:</h4>
            <h4>{subtotal}$</h4>
          </div>
          <div className="nav-cart-buttons">
            <button
              onClick={() => {
                dispatch(closeCart());
                navigate("/cart");
              }}
            >
              View Cart
            </button>
            <button
              onClick={() => {
                dispatch(closeCart());
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSlider;
