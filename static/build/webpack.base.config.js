const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const babelrc = require('../../.babelrc');
const sourcePath = path.join(__dirname, './static/src');
const outputPath = path.join(__dirname, './../output/dist');

module.exports = {
  //入口文件
  entry: {
    'admin': './static/src/pages/admin.js',
    'work': './static/src/pages/work.js',
    'index': './static/src/pages/index.js',
    'error': './static/src/pages/error.js',
    vendor: ['react', 'react-dom', 'whatwg-fetch'],
  },

  //出口文件
  output: {
    path: outputPath,
    publicPath: '/static/output/dist/',
    filename: 'js/[name].js'
  },
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common',
    },
    runtimeChunk: {
      name: 'runtime',
    },
    minimize: true
  },

  //配置编译打包规则
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              //preset: ['es2015'. 'react'],
              chacheDirectory: true
            }
          }
        ] 
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel?' + JSON.stringify(
            Object.assign({}, babelrc, {cacheDirectory: true})
          ),
          'aslant'
        ],
        exclude: /(node_modules|bower_components)/,
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules'
    ]
  },

  //模式设置
  mode: 'development',

  //mode: 'production',
  plugins: [
    new webpack.optimize.UgliyfyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.optimize.ConmmonsChunkPlugin({name:'runtime',chunk:['common']}),
    new miniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: "[id].css"
    }),
    babel({
      presets: [['env', { modules: false }], 'stage-2'],
      exclude: 'node_modules/**',
      babelrc: false
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor'],
    //   minChunks: Infinity,
    //   filename: 'js/[name].js'
    // })
  ]
}