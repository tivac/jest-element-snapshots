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

`jest-element-snapshots` exports a function that will take one optional arg, an object of configuration params.

All params are **optional**.

#### Params

##### `page`

A reference to the `puppeteer` [`page`](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page) object. If you're using [`jest-puppeteer`](https://github.com/smooth-code/jest-puppeteer) the default will work fine.

##### `waitFor`

If truthy will make the matcher wait for the selector to exist in the DOM before attempting to read the element from the DOM. If falsey the matcher will attempt to read the element from the DOM immediately.

### Usage API

`expect(<string|ElementHandle> element).toMatchDOMSnapshot(<string> hint, <object> options)`

#### Arguments

##### `element`

Either a string CSS selector, or a puppeteer [`ElementHandle`](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-elementhandle). Will be used to locate the element in the DOM to snapshot.

##### `hint`

A string that is passed to the underlying jest `.toMatchSnapshot()` code as the [`hint`](https://jestjs.io/docs/en/expect#tomatchsnapshotpropertymatchers-hint) parameter to give snapshots an extra name, useful for differentiating multiple snapshots in a single test.

##### `options`

Snapshot-specific options, will override any [options](#params) set globally.

###### `waitFor`

If truthy will make the matcher wait for the selector to exist in the DOM before attempting to read the element from the DOM. If falsey the matcher will attempt to read the element from the DOM immediately.
