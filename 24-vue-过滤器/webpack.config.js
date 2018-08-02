const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        css: ExtractTextWebpackPlugin.extract({
                            use: "css-loader",
                            fallback: "vue-style-loader"
                        })
                    }
                }
            },
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader'
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
        new ExtractTextWebpackPlugin("index.css"),
        new VueLoaderPlugin(), // 必须要加，否则报错
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "0.0.0.0", //0.0.0.0 可服务器提供给外部访问
        port: "9999",
        hot: true,
        open: true
    }
};
