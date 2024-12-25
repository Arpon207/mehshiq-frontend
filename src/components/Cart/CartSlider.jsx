import { useDispatch, useSelector } from "react-redux";
import "./cartSlider.css";
import emptyCart from "../../assets/icons/abandoned-cart.png";
import {
  closeCart,
  removeItem,
  resetCart,
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
              <button onClick={() => dispatch(resetCart())}>reset</button>
              <button onClick={() => dispatch(closeCart())}>
                <RxCross2 />
              </button>
            </div>
            <hr />
          </div>
          {products.length > 0 ? (
            <div className="cart-products">
              {products.map(({ title, price, quantity, variant, _id }, i) => (
                <div className="cart-product" key={i}>
                  <img src={variant.image?.url} alt="" />
                  <div>
                    <strong>{title}</strong>
                    <p>
                      {quantity} * {price}$
                    </p>
                  </div>

                  <button
                    className="nav-cart-delete-btn"
                    onClick={() =>
                      dispatch(
                        removeItem({
                          uniqueKey: `${variant.image.public_id + _id}`,
                        })
                      )
                    }
                  >
                    <RxCross2 />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className=" cartslider-empty">
              <img src={emptyCart} alt="" />
              <h3>Your cart is empty!</h3>
              <button
                onClick={() => {
                  navigate("/collections");
                  dispatch(closeCart());
                }}
              >
                Explore Our Collection
              </button>
            </div>
          )}
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
