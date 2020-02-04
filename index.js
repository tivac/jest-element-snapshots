"use strict";

const { toMatchSnapshot } = require("jest-snapshot");

module.exports = ({ page = global.page, waitFor = false } = false) => {
    expect.extend({
        async toMatchDOMSnapshot(selector, name = "", opts = {}) {
            let el = selector;

            // Support both string selectors and ElementHandles
            if(typeof selector === "string") {
                const wait = "waitFor" in opts ? opts.waitFor : waitFor;

                if(wait) {
                    await page.waitForSelector(selector);
                }

                el = await page.$(selector);

                if(!el) {
                    throw new Error(`Unable to locate element matching: ${selector}`);
                }
            }

            /* istanbul ignore next */
            const source = await page.evaluate((element) => element.outerHTML, el);

            return toMatchSnapshot.call(
                this,
                source,
                name,
            );
        },
    });
};
