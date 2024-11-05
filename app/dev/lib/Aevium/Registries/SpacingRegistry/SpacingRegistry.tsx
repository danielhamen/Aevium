import { Registry } from "../Registry";

export namespace SpacingRegistry {
  export const SpacingRegistry = new Registry();

  export function register() {
    // Tailwind Spacing
    SpacingRegistry.register("Spacing(1)", "1px");
    SpacingRegistry.register("Spacing(2)", "2px");
    SpacingRegistry.register("Spacing(3)", "4px");
    SpacingRegistry.register("Spacing(4)", "8px");
    SpacingRegistry.register("Spacing(5)", "12px");
    SpacingRegistry.register("Spacing(6)", "16px");
    SpacingRegistry.register("Spacing(7)", "24px");
    SpacingRegistry.register("Spacing(8)", "32px");
  }

  export function unregister() {
    // Tailwind Spacing
    SpacingRegistry.unregister("Spacing(1)");
    SpacingRegistry.unregister("Spacing(2)");
    SpacingRegistry.unregister("Spacing(3)");
    SpacingRegistry.unregister("Spacing(4)");
    SpacingRegistry.unregister("Spacing(5)");
    SpacingRegistry.unregister("Spacing(6)");
    SpacingRegistry.unregister("Spacing(7)");
    SpacingRegistry.unregister("Spacing(8)");
  }
}
