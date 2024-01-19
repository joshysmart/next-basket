import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WishState {
  items: {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    quantity: number;
  }[];
}

const initialState: WishState = {
  items: JSON.parse(localStorage.getItem("wishList") || "[]"),
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<WishState["items"][0]>) => {
      const { payload } = action;
      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.quantity += payload.quantity;
      } else {
        state.items.push(payload);
      }
      localStorage.setItem("wishList", JSON.stringify(state.items));
    },
    removeFromWishList: (
      state,
      action: PayloadAction<WishState["items"][0]>
    ) => {
      const { payload } = action;
      const items = state.items.filter((item) => item.id !== payload.id);
      state.items = items;
      localStorage.setItem("wishList", JSON.stringify(state.items));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWishList } = wishSlice.actions;

export default wishSlice.reducer;
