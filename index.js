"use strict";

const { toMatchSnapshot } = require("jest-snapshot");

module.exports = (page = global.page) => {
    expect.extend({
        async toMatchDOMSnapshot(selector, ...args) {
            let el = selector;

            // Support both string selectors and ElementHandles
            if(typeof selector === "string") {
                el = await page.$(selector);

                if(!el) {
                    throw new Error(`Unable to locate element matching: ${selector}`);
                }
            }

            const source = await page.evaluate((element) => element.outerHTML, el);

            return toMatchSnapshot.call(
                this,
                source,
                ...args,
            );
        },
    });
};
