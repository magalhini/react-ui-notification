var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('---------------------------------------------------');
console.log('Here we go. If it fails, do not despair. Why weep?');
console.log('---------------------------------------------------');

module.exports = {
    entry: {
        main: ['./example/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'example'),
        publicPath: '/example/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('styles.[hash].css', { allChunks: true }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                dead_code: true,
                drop_console: true,
                drop_debugger: true
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')],
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 2 version'
                ]
            }
        ]
    }
};
