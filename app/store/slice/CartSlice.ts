import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  reduxProductState,
  reduxProductAction,
} from "@/app/interface/interface";

export interface CounterState {
  items: Array<reduxProductState>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (
      state: CounterState,
      action: PayloadAction<{ product: reduxProductAction; quantity: number }>
    ) => {
      state.totalQuantity += action.payload.quantity;
      const newItem = action.payload.product;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        const totalPrice = newItem.price * action.payload.quantity;
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
        console.log("existingItem", existingItem);
      }
      console.log("newItem", newItem);
      console.log("cartSlice", state.items);
    },

    remeFromCart: (state, action: PayloadAction<any>) => {
      state.totalQuantity -= action.payload.quantity;
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const counterActions = cartSlice.actions;

export default cartSlice.reducer;
