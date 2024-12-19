import { cartSlice, cartVisibilitySlice } from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { postsSlice } from "./postAPI";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

const rootReducer = combineReducers({
  cart: persistedReducer,
  cartVisibility: cartVisibilitySlice.reducer,
  [postsSlice.reducerPath]: postsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return getDefaultMiddleware().concat(postsSlice.middleware);
  },
});

export let persistor = persistStore(store);
