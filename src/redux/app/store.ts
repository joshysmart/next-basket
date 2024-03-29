import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/product";
import cartReducer from "../features/cart/cartSlice";
import wishReducer from "../features/wish/wishSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
