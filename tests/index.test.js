"use strict";

describe(".toMatchDOMSnapshot()", () => {
    it("should accept a string", async () => {
        await page.goto(require.resolve("./fixtures/one.html"));
        
        await expect(".one").toMatchDOMSnapshot();
    });
    
    it("should accept an ElementHandler", async () => {
        await page.goto(require.resolve("./fixtures/one.html"));

        const el = await page.$(".one");

        await expect(el).toMatchDOMSnapshot();
    });
    
    it("should support named snapshots", async () => {
        await page.goto(require.resolve("./fixtures/one.html"));

        await expect(".one").toMatchDOMSnapshot("named");
    });
});
