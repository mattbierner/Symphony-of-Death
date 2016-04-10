var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'scripts'),
        filename: 'bundle.js'
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
    }
};