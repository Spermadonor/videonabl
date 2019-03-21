const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin'),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  sortCSSmq = require('sort-css-media-queries'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  webpack = require('webpack'),
  path = require('path'),
  distRoot = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'production',
  entry: ['./src/code.js',
    './src/main.styl'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'code.js',
    publicPath: ''
  },
  module: {
    rules: [
    {
        test: /\.(styl|css)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              //publicPath: '../'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("postcss-cssnext")(),
                require("css-mqpacker")({sort: sortCSSmq})
              ],
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
            loader: 'url-loader',
            options: {
              name: "./img/[name].[ext]",
              limit: 10 * 1024
            }
          },
          {
            loader: 'tinify-loader',
            options: {
              apikey: ['27DcTE0ZENMnBYBfnuPCKyGA7A7vERyR'],
              cache: '/cachTinify/'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(distRoot),
    new SVGSpritemapPlugin('./src/img/svg/**/*.svg', {
      output: {
          filename: 'img/svg/spritemap.svg',
          svg: {
              sizes: false
          },
          svgo: true,
          svg4everybody: true,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.pug',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({}),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  },
};