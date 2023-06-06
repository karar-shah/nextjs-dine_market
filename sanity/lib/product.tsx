import { defineField } from "sanity";

export const products = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    }),
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
