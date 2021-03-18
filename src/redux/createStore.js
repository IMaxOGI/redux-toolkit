import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import productsReducer from "./slices/product";
import authReducer from "./slices/auth";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
      auth: authReducer,
    },
    middleware: [...getDefaultMiddleware()],
    devTools: true,
  });
};
