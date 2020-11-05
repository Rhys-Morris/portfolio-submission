const path = require('path');

module.exports = {
    entry: "./src/style.css",
    output: {
        filename: "style.prefix.css",
        path: path.join(__dirname, "src")
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    }
}