import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  items: Array<any>;
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
      action: PayloadAction<{ quantity: number }>
    ) => {
      if (state.totalQuantity < 5) {
        state.totalQuantity += action.payload.quantity;
      }
    },
    remeFromCart: (state, action: PayloadAction<any>) => {
      if (state.totalQuantity >= 1) {
        state.totalQuantity -= action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const counterActions = cartSlice.actions;

export default cartSlice.reducer;
