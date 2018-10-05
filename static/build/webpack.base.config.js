const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');     //打包html
//const miniCssExtractPlugin = require('mini-css-extract-plugin'); 
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');   //抽离css
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
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        //exclude: [],   //不匹配选项，优先级高于test和include
        use: 'babel-loader',
          
      },
      {
        test: /\.css$/,
        use: extractTextWebpackPlugin({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'style-loader'
          ]
        })
      },
      {
        test: /\.sass$/,
        use: extractTextWebpackPlugin({
          fallback: 'sass-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
          
        })
      },
      {
        test: /\.less$/,
        use: extractTextWebpackPlugin({
          fallback: 'sass-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
          
        })
      },
      {
        test: /\.jsx$/,
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
    extensions: ['.js', '.jsx', '.less', '.css', '.json'],
    alias: {    //模块别名列表
      utils: path.resolve(__dirname, 'src/utils')
    },
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
    new extractTextWebpackPlugin({
      filename: 'css/[name].css',
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