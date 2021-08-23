let loaderUtils = require('loader-utils')
// let validateOptions = require('schema-utils')
let fs = require('fs')
function loader(source) {
  this.cacheable && this.cacheable(false)
  let options = loaderUtils.getOptions(this)
  let cb = this.async()
  // let scheme = {
  //   type:'object',
  //   properties:{
  //     text:{
  //       type:'string'
  //     },
  //     filename:{
  //       type:'string'
  //     }
  //   }
  // }
  // validateOptions(scheme, options, 'banner-loader')
  if (options.filename) {
    // webpack打包依赖
    // this.addDependency(options.filename)
    fs.readFile(options.filename,'utf8',function(err,data){
      cb(err,`/**${ data }**/${source}`)
    })
  } else {
    cb(null,`/**${ options.text }**/${source}`)
  }
}
module.exports = loader