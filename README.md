# koaProject
koa2搭建服务器
MYSQL作为数据库，储存普通数据，存储session登陆态数据
eje作为服务器渲染的模板引擎
webpack编译环境

报错webpack.optimize.CommonsChunkPlugin has been removed, please use config.o  ptimization.splitChunks instead.
原因： webpack.optimize.CommonsChunkPlugin不支持es6语法，安装uglify-es控制es版本

mini-css-extract-plugin代替extract-text-webpack-plugin 插件的作用时集合散落各处的css

Module build failed (from ./node_modules/babel-loader/lib/index.js):
ReferenceError: [BABEL] E:\koaProject\static\src\pages\admin.js: Unknown option: base.chacheDiretory. Check out http://babeljs.io/docs/usage/options/ for more information about options.

A common cause of this error is the presence of a configuration options object without the corresponding preset name. Example:

Invalid:
  `{ presets: [{option: value}] }`
Valid:
  `{ presets: [['presetName', {option: value}]] }`

引入
.babelrc文件，结果
E:\koaProject\.babelrc:2
  "presets":[["es2015", { "modules": false }], "react", "stage-2"],
           ^
SyntaxError: Unexpected token :

