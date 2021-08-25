
class WebpackPlugin {
  apply(compiler){
    compiler.hooks.done.tap('DonePlugin',(stats)=>{
      console.log('编译完成~~~')
    })
  }
}

module.exports = WebpackPlugin