import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    expect(cn("text-cream", "bg-ink")).toBe("text-cream bg-ink");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", true && "visible")).toBe("base visible");
  });

  it("resolves conflicting tailwind classes", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
  });
});
