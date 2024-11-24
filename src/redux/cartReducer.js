import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  subtotal: 0,
};

const cartState = {
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      state.products = state.products.map((item) => {
        if (item._id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state.products = state.products.map((item) => {
        if (item._id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload._id
      );
    },
    resetCart: (state, action) => {
      state.products = [];
    },
    subTotalCounter: (state, action) => {
      let total = 0;
      let quantity = 0;
      state.products.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.subtotal = total;
    },
  },
});

export const cartVisibilitySlice = createSlice({
  name: "cartVisibility",
  initialState: cartState,
  reducers: {
    openCart: (state, action) => {
      state.isCartOpen = true;
    },
    closeCart: (state, action) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  addToCart,
  removeItem,
  resetCart,
  subTotalCounter,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export const { openCart, closeCart } = cartVisibilitySlice.actions;
