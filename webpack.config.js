const path = require('path');

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        filename: "main.min.js",
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
            }
        ]
    }
}