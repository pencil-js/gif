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
 * @returns {Promise<HTMLImageElement>}
 */
export default async function (offscreenCanvas, nbFrames = 1, options = {}) {
    const worker = new this.Worker("worker.js", {
        type: "module",
    });

    const send = (action, ...args) => {
        worker.postMessage({
            action,
            args,
        });
    };

    const userOptions = {
        ...defaultOptions,
        ...options,
    };

    return new Promise((resolve) => {
        worker.onmessage = ({ data }) => {
            const blob = new window.Blob([data], {
                type: "image/gif",
            });

            const image = new window.Image();
            image.src = window.URL.createObjectURL(blob);

            resolve(image);

            worker.terminate();
        };

        const { width, height } = offscreenCanvas;

        send("start", width, height, userOptions);

        const delay = (1000 / 60) / userOptions.speed;

        for (let i = 0; i < nbFrames; ++i) {
            const data = offscreenCanvas.getImageData();

            send("addFrame", data, delay);
        }

        send("end");
    });
}
