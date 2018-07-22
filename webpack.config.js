// webpack.config.js
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/js/entry.js',
    output: {
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['env', {modules: false}],
                    ],
                },
            },
        ],
    },
    plugins: [
        /* uncomment for include jQuery */

        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),*/
    ],
    devtool: 'source-map'
};
