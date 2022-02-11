const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
      template:"./src/template.html"
  })],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  module: {
      rules:[
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
                test: /\.(js)$/,
                use: ['babel-loader'],
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/,
              use: {
                  loader: "file-loader",
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/'
                  }
              },
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
      ],
  },
};