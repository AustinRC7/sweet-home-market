import { describe, expect, it } from "vitest";
import { BULK, SALE } from "@/lib/store";

describe("store deals", () => {
  it("sale is pick five for $19.99", () => {
    expect(SALE.count).toBe(5);
    expect(SALE.price).toBe("$19.99");
  });

  it("sale covers meat, produce, dairy and frozen", () => {
    expect([...SALE.departments]).toEqual(["Meat", "Produce", "Dairy", "Frozen"]);
  });

  it("bulk Mexican groceries include spices, snacks and drinks", () => {
    expect(BULK.mexican).toEqual(expect.arrayContaining(["Spices", "Snacks", "Drinks"]));
  });
});
