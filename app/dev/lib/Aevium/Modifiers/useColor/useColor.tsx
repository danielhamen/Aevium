import { RegistryReadAllDataEntries } from "@Aevium/Registries/Registry";
import { ColorRegistry } from "@Aevium/Registries";
import React, { useContext, useEffect, useState } from "react";

export function useColor() {
  const colors = useContext(ColorContext);

  return colors;
}

export const ColorContext = React.createContext<RegistryReadAllDataEntries>(
  ColorRegistry.ColorRegistry.readall(),
);
