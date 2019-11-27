import Gif from "@pencil.js/canvas-gif-encoder";

const defaultOptions = {
    speed: 1,
};

/**
 * @typedef {Object} GIFOptions
 * @prop {Number} [speed=1] - Rendering speed ratio (1 means ~60fps, 0.5 means ~30fps ...)
 */
/**
 * Turn any Pencil.js scene into an animated GIF
 * @param {OffscreenCanvas} offscreenCanvas - OffscreenCanvas or Scene coming from Pencil.js to be draw onto the GIF
 * @param {Number} nbFrames - Number of frame to render (Do not represent the exact number of frames on the create GIF)
 * @param {GIFOptions} options - Some options
 * @returns {HTMLImageElement}
 */
export default (offscreenCanvas, nbFrames = 1, options = {}) => {
    const userOptions = {
        ...defaultOptions,
        ...options,
    };

    const { width, height } = offscreenCanvas;
    const gif = new Gif(width, height, userOptions);
    const delay = (1000 / 60) / userOptions.speed;

    for (let i = 0; i < nbFrames; ++i) {
        offscreenCanvas.render();

        gif.addFrame(offscreenCanvas.ctx, delay);
    }

    const blob = new window.Blob([gif.end()], {
        type: "image/gif",
    });

    const image = new window.Image();
    image.src = window.URL.createObjectURL(blob);

    return image;
};
