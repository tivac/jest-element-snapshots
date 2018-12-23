"use strict";

const { toMatchSnapshot } = require("jest-snapshot");

module.exports = (page = global.page) => {
    expect.extend({
        async toMatchDOMSnapshot(selector, ...args) {
            let el;
            
            // Support both string selectors and ElementHandles
            if(typeof selector === "string") {
                el = await page.$(selector);
            } else {
                el = selector;
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
