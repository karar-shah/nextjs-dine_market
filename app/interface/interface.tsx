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
