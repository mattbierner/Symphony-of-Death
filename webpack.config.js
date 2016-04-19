var path = require('path');
var webpack = require("webpack");
var package = require('./package.json');

module.exports = {
    entry: {
        vendor: [].concat(Object.keys(package.dependencies)),
        interactive_index: './src/interactive_index.jsx',
        timeline_index: './src/timeline_index.jsx'
    },
    output: {
        path: path.join(__dirname, 'scripts'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'react'] }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /[\/\\]node_modules[\/\\]shader-particle-engine[\/\\]/,
                loader: "imports?THREE=three"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ]
};