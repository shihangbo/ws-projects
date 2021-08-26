const path = require('path')
let DonePlugin = require('./source/plugins/src/DonePlugin')
let AsyncPlugin = require('./source/plugins/src/AsyncPlugin')
let FileListPlugin = require('./source/plugins/src/FileListPlugin')
let UploadPlugin = require('./source/plugins/src/UploadPlugin')
module.exports = {
  context:process.cwd(),
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
      // {
      //   test:/\.less$/,
      //   use:['style-loader','css-loader','less-loader']
      // },
      // {
      //   test:/\.jpeg$/,
      //   // use:'file-loader'
      //   use:{
      //     loader:'url-loader',
      //     options:{
      //       limit:200*1024
      //     }
      //   }
      // },
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
      // {
      //   test:/\.js$/,
      //   use:{
      //     loader:'banner-loader',
      //     options:{
      //       text:'ws',
      //       // filename:path.resolve(__dirname,'banner.js')
      //     }
      //   },
      //   // enforce:'post'
      // }
      // {
      //   test:/\.js$/,
      //   use:['loader3','loader2','loader1',]
      // }
    ]
  },
  plugins: [
    // new DonePlugin(),
    // new AsyncPlugin(),
    // new FileListPlugin({
    //   filename:'list.md'
    // })
    // new UploadPlugin({
    //   bucket:'', // 储存空间
    //   domain:'', // 域名
    //   accessKey:'', // 密码
    //   secretKey:''  // 密钥
    // })
  ]
}