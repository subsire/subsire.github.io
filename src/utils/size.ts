export type Size = "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

export function getFractionSize(size: Size = "md") {
  switch (size) {
    case "3xl":
      return "xl";
    case "2xl":
      return "lg";
    case "xl":
      return "md";
    case "lg":
      return "sm";
    case "md":
    case "sm":
    case "xs":
    default:
      return "xs";
  }
}