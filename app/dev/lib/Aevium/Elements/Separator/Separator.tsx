import { CSS } from "@Aevium/Aevium";
import { View } from "@Aevium/Elements";
import { useColor } from "@Aevium/Modifiers";
import { Orientation, Vector2D } from "@Aevium/Types";
import React, { useMemo } from "react";

export interface SeparatorProps {
  orientation?: Orientation;
  color?: string;
  size?: Vector2D;
  shadow?: string;
}

export function Separator({
  orientation = "horizontal",
  color,
  size = { x: 2, y: Infinity },
  shadow = `inset 0 0 4px rgb(0 0 0 / 10%)`,
}: SeparatorProps) {
  const Colors = useColor();
  const separatorColor = color ?? Colors["Slate(200)"];

  const [width, height] = useMemo(() => {
    return orientation === "vertical"
      ? [`${size.y}px`, "100%"]
      : ["100%", `${size.x}px`];
  }, [orientation, size]);

  const separatorStyles = CSS(`
    background: ${separatorColor};
    min-width: ${width};
    width: ${width};
    max-width: ${width};
    min-height: ${height};
    height: ${height};
    max-height: ${height};
    border-radius: 999px;
    box-shadow: ${shadow};
  `);

  return <View className={[separatorStyles]}></View>;
}
