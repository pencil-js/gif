# @pencil.js/gif

[![Package version](https://flat.badgen.net/npm/v/@pencil.js/gif)](https://www.npmjs.com/package/@pencil.js/gif)

Turn any Pencil.js scene into an animated GIF.


## Installation

    npm install @pencil.js/gif


## [CDN](https://developer.mozilla.org/docs/Glossaire/CDN "Content Delivery Network")
You can download this directly from a CDN. Be sure to add the `<script>` tag after the Pencil.js's one.
The `.gif()` function will be added to the `Pencil` namespace.

```html
<!--Pencil.js should come first-->
<script src="https://unpkg.com/pencil.js"></script>

<script src="https://unpkg.com/@pencil.js/gif"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/@pencil.js/gif"></script>

<script>
    console.log(Pencil.gif);
</script>
```


## Usage

```js
import gif from "@pencil.js/gif";

gif(<OffscreenCanvas>, <nbFrames>, <options>);
```


## Example

```js
import gif from "@pencil.js/gif";
import { OffScreenCanvas, Square } from "pencil.js";

const nbFrames = 100;

// Create a new scene off-screen
const width = 300;
const height = 200;
const scene = new OffScreenCanvas(width, height);

// Create a square shape
const size = 100;
const square = new Square(scene.center, size, {
    fill: "red",
});

// Make it spin
square.on("draw", () => {
    square.options.rotation = square.frameCount / nbFrames;
});

// Add it to the scene
scene.add(square);

// Turn the scene into an animated GIF
const file = gif(scene, nbFrames);
document.body.appendChild(file);
```


## Documentation

### `gif(<scene>, <nbFrame>)`
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


## License

[MIT](license)
