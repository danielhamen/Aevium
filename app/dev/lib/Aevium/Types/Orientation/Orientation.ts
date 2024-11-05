export type Orientation = "vertical" | "horizontal";

export function isOrientation(o: unknown): o is Orientation {
  return typeof o === "string" && (o === "vertical" || o === "horizontal");
}
