const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const entry = "./index.js";
const library = "gif";
const workerRule = {
    test: /worker.js/,
    loader: "worker-loader",
    options: {
        inline: true,
        fallback: false,
    },
};

module.exports = [{
    entry,
    output: {
        filename: "gif.min.js",
        library,
        libraryExport: "default",
    },
    module: {
        rules: [
            workerRule,
        ],
    },
}, {
    entry,
    output: {
        filename: "gif.esm.js",
        library,
    },
    plugins: [
        new EsmWebpackPlugin(),
    ],
    module: {
        rules: [
            workerRule,
        ],
    },
}];
