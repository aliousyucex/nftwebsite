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
        test: /\.(gif|png|jpe?g|svg|mp3)$/i,
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
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    allowedHosts: 'all',
    compress: true,
    port: 80,
  },
}