import { BuilderComponent, builder } from "@builder.io/react";

builder.init("3c7e390ebd25467aa0bf62675258be66");

export function DisplayPage(props) {
  return (
    <>
      <h1>This is the display page</h1>
      <BuilderComponent content={props.content} model="page" />
    </>
  );
}
