import { defineType, defineField } from "sanity";

export const clothType = defineType({
  name: "clothType",
  type: "document",
  title: "Cloth Type",
  fields: [
    defineField({
      name: "clothTypeName",
      title: "Cloth Type Name",
      type: "string",
    }),
  ],
});
