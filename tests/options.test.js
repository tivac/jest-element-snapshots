"use strict";

const matcher = require("../index.js");

const load = require("./load.js");

describe(".toMatchDOMSnapshot() options", () => {
    beforeEach(async () => {
        await page.goto(load(require.resolve("./fixtures/one.html")));
    });

    it("should accept a different page instance", async () => {
        const two = await browser.newPage();

        await two.goto(load(require.resolve("./fixtures/two.html")));
        
        matcher({ page : two });

        await expect(".two").toMatchDOMSnapshot();
    });

    it("should wait for an element to exist when waitFor is true", async () => {
        matcher({ waitFor : true });

        const matching = expect(".new").toMatchDOMSnapshot();

        await page.evaluate(() => {
            document.body.innerHTML = `<div class="new">NEW</div>`;
        });

        await matching;
    });
    
    it("should allow overriding the global waitFor setting", async () => {
        matcher({ waitFor : true });

        const matching = expect(".new").toMatchDOMSnapshot("snap", { waitFor : false });

        await expect(matching).rejects.toThrowErrorMatchingSnapshot();
    });
});
