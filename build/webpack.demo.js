const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackConfig = {
  mode: 'development',
  entry: './demo/indexUsingCss.js', // 路径？
  output: {
    path: path.resolve(process.cwd()),
    publicPath: '',
    filename: '[name].[hash:7].js',
    chunkFilename: '[name].[hash:7].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8086,
    publicPath: '/',
    hot: true
  },
  performance: {
    hints: false
  },
  stats: {
    children: false // ？
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/index.tpl', // 路径？
      // The file to write the HTML to
      filename: './index.html' // 路径？
    }),
    new VueLoaderPlugin()
    // 这个需要吗？
    // new webpack.LoaderOptionsPlugin({
    //   vue: {
    //     compilerOptions: {
    //       preserveWhitespace: false
    //     }
    //   }
    // })
  ]
}

module.exports = webpackConfig
