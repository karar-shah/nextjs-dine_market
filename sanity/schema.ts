import { type SchemaTypeDefinition } from "sanity";
import { products } from "./lib/product";
import { category } from "./lib/category";
import { staticImage } from "./lib/staticImage";
import { clothType } from "./lib/clothType";
import { oneImage } from "./lib/oneImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category, staticImage, clothType, oneImage],
};
