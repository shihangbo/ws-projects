const path = require('path')

module.exports = {
  mode:'development',
  entry:'./source/loader/index.js',
  output:{
    filename:'build.js',
    path:path.resolve(__dirname,'dist')
  },
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
      //   test:/\.js$/,
      //   use:['loader3','loader2','loader1',]
      // }
    ]
  }
}