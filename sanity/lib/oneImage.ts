import { defineType, defineField } from "sanity";

export const oneImage = defineType({
  name: "oneImage",
  type: "document",
  title: "one Image",
  fields: [
    defineField({
      name: "oneImageOne",
      title: "Image",
      type: "image",
    }),
  ],
});
