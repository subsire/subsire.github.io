export type Size = "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

export function getButtonSize(size: Size = "md", primary = false) {
  switch (size) {
    case "md":
      return "text-md py-3 " + (primary ? "px-5" : "px-4");
    case "sm":
      return "text-sm py-2 " + (primary ? "px-4" : "px-3");
    case "xs":
      return "text-xs py-2 " + (primary ? "px-4" : "px-3");
    default:
      return "";
  }
}

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