import React from "react";
import { builder, BuilderComponent } from "@builder.io/react";

builder.init("3c7e390ebd25467aa0bf62675258be66");

export const Header = () => (
  <>
    <h1>This is the header as a section</h1>
    <BuilderComponent model="header" />
  </>
);

// export const Header = props => (
//     <h1>
//       {props.title}
//       Some stuff
//     </h1>
//   )

// Builder.registerComponent(
//   Header, {
//     name: 'Header',
//     inputs: [
//       {
//         name: 'headerTextContent',
//         type: 'string'
//       }
//     ]
//   }
// )
