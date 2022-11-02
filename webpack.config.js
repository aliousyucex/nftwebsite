const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/js/canvas.js',
  output: {
    path: __dirname + '/dist/',
    filename: './js/canvas.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  hash: false,
                  outputPath: 'IMG'
              }
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
              loader: "css-loader",
              options: {
                  name: '[name].[ext]',
                  hash: false,
                  modules: true,
                  outputPath: 'fonts'
              }
          },
        ],
      },
      {
        test: /\.(ttf|otf|woff)$/i,
        use: {
          loader: 'file-loader',
          options:{
            name: '[name].[ext]',
            outputPath:'fonts',
            }
          }
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: 'src/index.html'
    })
  ],
  watch: true,
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3500,
  },
}
