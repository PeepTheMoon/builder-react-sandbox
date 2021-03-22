import { Header } from "./Header.jsx";
import { Builder } from "@builder.io/react";

export const HeaderBuilderConfig = {
  name: "header",
  inputs: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Yooo check this header!"
    }
  ]
};

Builder.registerComponent(Header, HeaderBuilderConfig);
