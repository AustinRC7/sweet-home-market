import { describe, expect, it } from "vitest";
import { STORE, SPICES } from "@/lib/store";

describe("store info", () => {
  it("phone number is 334-676-1433", () => {
    expect(STORE.phone).toBe("(334) 676-1433");
    expect(STORE.phoneHref).toBe("tel:+13346761433");
  });

  it("spice page shows no prices", () => {
    expect(JSON.stringify(SPICES)).not.toMatch(/\$\d/);
  });
});
