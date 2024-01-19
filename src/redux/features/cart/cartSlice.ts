import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    quantity: number;
  }[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("carts") || "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState["items"][0]>) => {
      const { payload } = action;
      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.quantity += payload.quantity;
      } else {
        state.items.push(payload);
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<CartState["items"][0]>) => {
      const { payload } = action;
      const items = state.items.filter((item) => item.id !== payload.id);
      console.log(items, payload);

      state.items = items;
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
