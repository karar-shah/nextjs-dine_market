import { Image as Iimage } from "sanity";

export interface IProducts {
  title: string;
  image: Iimage;
}

export interface IProductsDetail {
  title: string;
  price: string;
  image: Iimage;
  clothType: string;
  product_details: string;
  productCare: string[];
}

export interface CartItem {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
  size: string;
}

export interface CartList {
  res: CartItem[];
}

export interface noUser {
  res: string[];
}
