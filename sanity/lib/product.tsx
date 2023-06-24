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
    defineField({
      name: "clothType",
      title: "Cloth Type",
      type: "reference",
      to: [
        {
          type: "clothType",
        },
      ],
    }),
    {
      name: "product_details",
      title: "PRODUCT DETAILS",
      type: "string",
    },
    {
      name: "productCare",
      title: "PRODUCT CARE",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
