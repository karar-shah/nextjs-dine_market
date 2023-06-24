import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  reduxProductState,
  reduxProductAction,
} from "@/app/interface/interface";
import { index } from "drizzle-orm/pg-core";

export interface CounterState {
  items: Array<reduxProductState>;
  value: number;
  totalAmount: number;
  totalQuantity: number;
  size: string;
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  value: 0,
  size: "",
};

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (
      state: CounterState,
      action: PayloadAction<{ product: reduxProductAction; quantity: number }>
    ) => {
      const newItem = action.payload.product;
      // console.log("length", state.items.length);
      // console.log("NewItem", newItem);
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =
        state.totalAmount +
        action.payload.quantity * action.payload.product.price;

      if (!existingItem) {
        const totalPrice = newItem.price * action.payload.quantity;
        // console.log("Push", {
        //   ...newItem,
        //   quantity: action.payload.quantity,
        //   totalPrice,
        // });
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice + newItem.price * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }

      state.value = 0;
      state.size = "";
    },

    removeFromCart(state: CounterState, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      state.totalQuantity--;

      // if (existingItem?.quantity === 1) {
      state.items = state.items.filter((item) => item.id !== productId);
      state.totalAmount =
        state.totalAmount - existingItem?.totalPrice! / existingItem?.quantity!;
      // } else {
      //   existingItem!.quantity--;
      //   existingItem!.totalPrice =
      //     existingItem!.totalPrice - existingItem?.totalPrice!;
      //   state.totalAmount =
      //     state.totalAmount -
      //     existingItem?.totalPrice! / existingItem?.quantity!;
      // }
    },
    clearCart: (state) => {
      state = initialState;
    },
    smallIncrement: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    smallDecrement: (state: CounterState, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    updateSize: (state: CounterState, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
    incrementInCart: (state: CounterState, action: PayloadAction<any>) => {},
  },
});

// Action creators are generated for each case reducer function
export const counterActions = cartSlice.actions;

export default cartSlice.reducer;
