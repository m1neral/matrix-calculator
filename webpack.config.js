var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {
        path: './dist/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        host: 'localhost',
        contentBase: './dist/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        preLoaders: [
            {
                test: /(\.js$|\.jsx$)/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /(\.js$|\.jsx$)/,
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
                exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};
