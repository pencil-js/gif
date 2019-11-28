import Gif from "@pencil.js/canvas-gif-encoder";

const api = {
    encoder: null,

    start (width, height, options) {
        this.encoder = new Gif(width, height, options);
    },

    addFrame (data, delay) {
        this.encoder.addFrame(data, delay);
    },

    end () {
        const stream = this.encoder.end();
        postMessage(stream);
    },
};

onmessage = ({ data }) => {
    api[data.action](...data.args);
};
