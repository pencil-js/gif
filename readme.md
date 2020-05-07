# @pencil.js/gif

[![Package version](https://flat.badgen.net/npm/v/@pencil.js/gif)](https://www.npmjs.com/package/@pencil.js/gif)

Turn any Pencil.js scene into an animated GIF.


## Installation

    npm install @pencil.js/gif


## [CDN](https://developer.mozilla.org/docs/Glossaire/CDN "Content Delivery Network")
You can download this directly from a CDN.


### ESM
```html
<script type="module">
    import gif from "https://unpkg.com/@pencil.js/gif/dist/gif.esm.js";

    gif();
</script>
```

### ES5
```html
<script src="https://unpkg.com/@pencil.js/gif"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/@pencil.js/gif"></script>

<script>
    gif();
</script>
```


## Usage

```js
import gif from "@pencil.js/gif";

gif(<OffscreenCanvas>, <nbFrames>, <options>);
```


## Example

Check out the [examples directory](examples).


## Documentation

### `gif(<scene>, <nbFrame>, <options>)`
Turn any Pencil.js scene into an animated GIF.

| Name | Type | Default | Comment |
| --- | --- | --- | --- |
|offscreenCanvas |`OffscreenCanvas` |required |OffscreenCanvas or Scene coming from Pencil.js to be draw onto the GIF |
|nbFrames |`Number` |`1` |Number of frames to draw |
|options |`GIFOptions` |([see below](#gifoptions)) |Some options |

### `GIFOptions`
You can also use all [`canvas-gif-encoder`'s options](https://github.com/pencil-js/canvas-gif-encoder#encoderoptions).

| Name | Type | Default | Comment |
| --- | --- | --- | --- |
|speed |`Number` |`1` |Rendering speed ratio (1 means ~60fps, 0.5 means ~30fps ...) |


## Bundler

This package is using `Worker` to offload the computation to a separate thread and not lock the browser.

When using a web bundler like Webpack or Rollup,
you should use a worker-loader plugin like [webpack `worker-loader`](https://github.com/webpack-contrib/worker-loader) or
[rollup `worker-loader`](https://github.com/darionco/rollup-plugin-web-worker-loader).


## License

[MIT](license)
