import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "categoryName",
      title: "Category Name",
      type: "string",
    }),
  ],
});

// *[_type=="product" ][6]{
//   title,
//   price,
//   category[]->{categoryName}}