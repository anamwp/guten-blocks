var webpack = require ('webpack');
var path = require('path');
module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
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
            }
        ]
    }
}