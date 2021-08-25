
class WebpackPlugin {
  apply(compiler){
    compiler.hooks.emit.tapAsync('AsyncPlugin',(compilation,cb)=>{
      setTimeout(()=>{
        console.log('文件发射出来，等1秒！')
        cb()
      },1000)
    })

    compiler.hooks.emit.tapPromise('AsyncPlugin',(compilation)=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log('再等1秒！')
          resolve()
        },1000)
      })
    })
  }
}

module.exports = WebpackPlugin