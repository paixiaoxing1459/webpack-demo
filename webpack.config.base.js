const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '最好没BUG',
            template: 'src/assets/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',  // 把文件变成文件路径   
                    },
                ],
            },
            {
                test: /\.styl$/,
                loader: [
                    // compiles Styl to CSS
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ],
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",  //把 js 代码转化成 style 标签
                    "css-loader",   // 把 css 代码转化成 js 字符串
                    {
                        loader: "sass-loader",  // 把 sass 代码转化成 css 代码
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                ],
            },
        ],
    },
};