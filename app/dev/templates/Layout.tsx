import React, { ReactNode } from "react";
import { ColorContext } from "@Aevium/Modifiers";
import { ColorRegistry } from "@Aevium/Registries";

export default function Layout({ child }: { child?: ReactNode }) {
  return (
    <>
      <ColorContext.Provider value={ColorRegistry.ColorRegistry.readall()}>
        {child}
      </ColorContext.Provider>
    </>
  );
}
