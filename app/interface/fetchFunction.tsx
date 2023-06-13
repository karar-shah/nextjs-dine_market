import { client } from "../lib/sanityClient";
import { Image as Iimage } from "sanity";
import { IProducts, IProductsDetail } from "./interface";

export const getProductData1 = async (url: string) => {
  const res = await client.fetch(url);
  return res;
};

export const findImage = (
  data: IProducts[],
  title: string
): Iimage | undefined => {
  for (const element of data) {
    if (element.title === title) {
      return element.image;
    }
  }
};
