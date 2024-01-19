import { TItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WishState {
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
  items = JSON.parse(window.localStorage.getItem("wishList") || "[]");
}

const initialState: WishState = {
  items,
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<WishState["items"][0]>) => {
      const { payload } = action;
      const item = state.items.find((item) => item.id === payload.id);
      if (item?.quantity && payload.quantity) {
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
