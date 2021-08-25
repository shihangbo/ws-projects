const path = require('path')
let DonePlugin = require('./source/plugin/src/DonePlugin')
let AsyncPlugin = require('./source/plugin/src/AsyncPlugin')
module.exports = {
  mode:'development',
  // entry:'./source/loader/index.js',
  entry:'./index.js',
  output:{
    filename:'build.js',
    path:path.resolve(__dirname,'dist')
  },
  devtool:'source-map',
  resolveLoader:{
    // alias:{
    //   loader1:path.resolve(__dirname,'source/loader/src/','loader1.js')
    // }
    modules:['node_modules',path.resolve(__dirname,'source/loader/src/')]
  },
  module:{
    // loader执行：从右向左，从下到上
    rules:[
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.jpeg$/,
        // use:'file-loader'
        use:{
          loader:'url-loader',
          options:{
            limit:200*1024
          }
        }
      },
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              '@babel/preset-env'
            ]
          }
        },
        // enforce:'pre'
      },
      {
        test:/\.js$/,
        use:{
          loader:'banner-loader',
          options:{
            text:'ws',
            // filename:path.resolve(__dirname,'banner.js')
          }
        },
        // enforce:'post'
      }
      // {
      //   test:/\.js$/,
      //   use:['loader3','loader2','loader1',]
      // }
    ]
  },
  plugins: [
    new DonePlugin(),
    new AsyncPlugin()
  ]
}