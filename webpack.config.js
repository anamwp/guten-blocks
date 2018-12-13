var webpack = require ('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app:[
            './src/main.js',
            './src/main.scss',
        ]
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:{
                    presets:['es2015', 'stage-0', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            // {
            //     test: /\.less$/,
            //     use: [{
            //       loader: 'style-loader' // creates style nodes from JS strings
            //     }, {
            //       loader: 'css-loader' // translates CSS into CommonJS
            //     }, {
            //       loader: 'less-loader' // compiles Less to CSS
            //     }]
            // }
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader','sass-loader'],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('[name].css')
    ]
}