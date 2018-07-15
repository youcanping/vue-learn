const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
let currentDirname = Array.from(__dirname.split(path.sep)).pop();
module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, "src/index.js")
    },
    output: {
        filename: "[name].js?[hash]",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader",
                options: {
                    filename: "[path][name].[ext]",
                    limit: "8192",
                    outputPath: "images/"
                }
            },
            {
                test: /\.js$/,
                exclude: /..\/node_modules\//,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin("dist"),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
            filename: "index.html",
            meta: {
                "viewport": "width=device-width, initial-scale=1.0",
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "0.0.0.0", //0.0.0.0 可服务器提供给外部访问
        port: "9999",
        hot: true
    }
};