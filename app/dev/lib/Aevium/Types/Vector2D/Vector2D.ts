export interface Vector2D {
  x: number;
  y: number;
}

export function isVector2D(v: unknown): v is Vector2D {
  return (
    v !== null &&
    typeof v === "object" &&
    typeof (v as Vector2D).x === "number" &&
    typeof (v as Vector2D).y === "number"
  );
}
