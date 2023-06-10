import { Image as Iimage } from "sanity";

export interface IProducts {
  title: string;
  image: Iimage;
}

export interface IProductsDetail {
  title: string;
  price: string;
  image: Iimage;
}

export interface CartItem {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
  size: string;
}

export interface ErrorResponse {
  message: string;
}
