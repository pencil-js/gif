module.exports = [{
    entry: "./web-export",
    output: {
        filename: "gif.min.js",
    },
    module: {
        rules: [
            {
                test: /worker.js/,
                loader: "worker-loader",
                options: {
                    inline: true,
                    fallback: false,
                },
            },
        ],
    },
}];
