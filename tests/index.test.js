"use strict";

describe(".toMatchDOMSnapshot()", () => {
    beforeAll(() => {
        require("../index.js")();
    });

    beforeEach(async () => {
        await page.goto(require.resolve("./fixtures/one.html"));
    });

    it("should accept a string", async () => {
        await expect(".one").toMatchDOMSnapshot();
    });

    it("should accept an ElementHandle", async () => {
        const el = await page.$(".one");

        await expect(el).toMatchDOMSnapshot();
    });

    it("should support named snapshots", async () => {
        await expect(".one").toMatchDOMSnapshot("named");
    });

    it("should give useful errors when a selector isn't found", async () => {
        try {
            await expect(".two").toMatchDOMSnapshot();
        } catch(e) {
            expect(e.toString()).toMatchSnapshot();
        }
    });
});
