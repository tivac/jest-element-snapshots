jest-element-snapshots
======================

Make capturing & comparing snapshots of the `puppeteer` DOM easier!

## Installing

1. `npm install jest-element-snapshots --save-dev`
2. Add this snippet somewhere in your tests (a [`setupTestFrameworkScriptFile`](https://jestjs.io/docs/en/configuration#setuptestframeworkscriptfile-string) is a good place)

```js
require("jest-element-snapshots")();
```

This will install the `.toMatchDOMSnapshot()` functionality onto `.expect()`. See the [Installation API](#installation-api) section for available options.

## Usage

```js
it("should generate some consistent output", async () => {
    await page.goto("http://example.com");

    // Will look up the element in puppeteer,
    // grab its .outerHTML value,
    // and compare it against any previous snapshot value
    //
    // This is an **async** matcher so use await!
    await expect("body").toMatchDOMSnapshot();
});
```

## API

### Installation API

`jest-element-snapshots` exports a default function that will take one optional arg, a reference to the `puppeteer` [`page`](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page) object. If you're using [`jest-puppeteer`](https://github.com/smooth-code/jest-puppeteer) the default will work fine.

### Usage API

`expect(<string|ElementHandle>).toMatchDOMSnapshot(<string>)`

The first argument to `expect()` should be either a string CSS selector, or a puppeteer [`ElementHandle`](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-elementhandle).

The first argument passed to `.toMatchDOMSnapshot()` should be a string for using jest's named snapshot support. Snapshot Property Matchers are **not supported**, mostly because we're dealing solely with strings here and that wouldn't make any sense.
