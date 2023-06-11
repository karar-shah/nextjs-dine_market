import { Image as Iimage } from "sanity";

export type IProducts = {
  title: string;
  image: Iimage;
};

export type IProductsDetail = {
  title: string;
  price: string;
  image: Iimage;
  clothType: string;
  product_details: string;
  productCare: string[];
};

export type CartItem = {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
  size: string;
};

export type CartList = {
  res: CartItem[];
};

export type noUser = {
  res: string[];
};

export type reduxProductAction = {
  id: string;
  size: string;
  price: number;
};
export type reduxProductState = {
  id: string;
  size: string;
  quantity: number;
  totalPrice: number;
};
