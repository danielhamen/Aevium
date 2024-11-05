export type Method =
  | "GET"
  | "POST"
  | "DELETE"
  | "PUT"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "TRACE";

const methods = new Set<Method>([
  "GET",
  "POST",
  "DELETE",
  "PUT",
  "HEAD",
  "OPTIONS",
  "PATCH",
  "TRACE",
]);

export function isMethod(v: unknown): v is Method {
  return typeof v === "string" && methods.has(v as Method);
}
