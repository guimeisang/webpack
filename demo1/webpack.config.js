/**
 * 最初webpack有这些模块
 * 1. entry;
 * 2. output;
 * 3. resolve;
 * 4. module;
 * 5. plugins;
 */

var webpack = require('webpack');

module.exports = {
  entry:{
      people: './app/main/people.js',
      company: './app/main/company.js',
      task: './app/main/task.js'
      // 放更多的入口文件....
  },
  output:{
      path: path.join(__dirname, '/app'), // 输出路径，
      filename : '[name].js'  // 输出文件名，[name]会根据entry的配置项的键输出多个文件
  },
  resolve:{
      // 配置查找模块的规则，可配置需要查找的文件后缀名，别名等等；
      extensions: ['', '.js', '.jsx', '.css'],
      alias: {
          jquery: path.join(__diraname, 'app/vendor/jquery'),
          bootstrap: path.join(__dirname,'app/vendor/bootstrap'),

          people: path.join(__dirname,'app/modules/people'),
          company: path.join(__dirname,'app/modules/company'),
          task: path.join(__dirname,'app/modules/task'),
      }
  },
  module:{
    loaders: [
        {
            test: /\.js$/,
            loaders: ['babel-loader','jsx-loader?'],
            include: path.join(__dirname, 'app'),
            exclude: path.join(__dirname, 'app/vendor') // 排除第三方厂商的js代码
        },{
            test:/\.jsx$/,
            loader:'babel-loader!jsx-loader?',
        }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.WatchIgnorePlugin()
  ]
}