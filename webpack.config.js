const env = process.env.NODE_ENV || "development";


const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");

const plugins = [];

console.log("NODE_ENV", env);

if (env === "production") {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({
            sourceMap: false
        })
    );
}

module.exports = {
    entry: [
        "react-hot-loader/patch",
        "./index.js"
    ],
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "app.bundle.js"
    },
    plugins: [
        ...plugins,
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            inject: "body"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};
