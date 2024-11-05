import escapeStringRegexp from "escape-string-regexp";
export { default as Page } from "./Structs/Page/Page";

import { ColorRegistry } from "@Aevium/Registries";
import { css } from "@emotion/css";

// CSS function
export function CSS(style: string | number): string {
  const T = typeof style;
  switch (T) {
    case "string":
      // Read all colors from ColorRegistry
      const Colors = ColorRegistry.ColorRegistry.readall();

      // Replace color keys in style with corresponding values
      Object.keys(Colors).forEach((key) => {
        const regex = new RegExp(escapeStringRegexp(key), "gi"); // Word boundary to match exact color names
        style = (style as string).replace(regex, Colors[key]);
      });

      // Pass the final style string to css function and return
      return css(style);
    case "number":
      return style + "px";
  }

  return "";
}
