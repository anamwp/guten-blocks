var webpack = require ('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var FileManagerPlugin = require('filemanager-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app:[ './src/main.js'],
        frontend:['./src/frontend.scss'],
        editor:['./src/editor.scss']
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
        new ExtractTextPlugin(
            '[name].css'
        ),

        new FileManagerPlugin({
            onEnd: [
              {
                delete: [
                  './dist/frontend.js',
                  './dist/editor.js'
                ]
              }
            ]
        }),
        new CopyWebpackPlugin([
            {from:'node_modules/uikit/dist/css/uikit.min.css',to:'../dist/resources/css'},
            {from:'node_modules/uikit/dist/js/uikit.min.js',to:'../dist/resources/js'}
        ])

    ]
}