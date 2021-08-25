let babel = require('@babel/core')
let loaderUtils = require('loader-utils')
function loader(source) {
  console.log('babel-loader~~~')
  let options = loaderUtils.getOptions(this)
  let cb = this.async()
  babel.transform(source,{
    ...options,
    sourceMap:true,
    filename:this.resourcePath.split('/').pop() // 文件名
  },function(err,result){
    cb(err,result.code,result.map) // 处理异步
  })
}
loader.pitch = function () {
  console.log('babel-loader~~~pitch')
}
module.exports = loader