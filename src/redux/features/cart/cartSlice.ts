import { TItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: TItem[];
}

let items = [
  {
    id: null,
    thumbnail: null,
    title: null,
    price: null,
    quantity: null,
  },
];

if (typeof window !== "undefined") {
  items = JSON.parse(
    window.localStorage.getItem("carts") || JSON.stringify(items)
  );
}

const initialState: CartState = {
  items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState["items"][0]>) => {
      const { payload } = action;
      const item = state.items.find((item) => item.id === payload.id);
      if (item?.quantity && payload.quantity) {
        item.quantity += payload.quantity;
      } else {
        state.items.push(payload);
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<CartState["items"][0]>) => {
      const { payload } = action;
      const items = state.items.filter((item) => item.id !== payload.id);
      state.items = items;
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
