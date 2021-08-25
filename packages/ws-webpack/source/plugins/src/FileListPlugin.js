class FileListPlugin {
  constructor(options){
    this.filename = options.filename
  }
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin',(compilation)=>{
      let assets = compilation.assets
      console.log('assets', assets)
      let content = '## 文件名    资源大小\r\n'
      Object.entries(assets).forEach(([filename,statObj])=>{
        content += `- ${filename}    ${statObj.size()}\r\n`
      })
      // 添加资源对象
      assets[this.filename] = {
        source(){ return content },
        size() { return content.length }
      }
    })
  }
}

module.exports = FileListPlugin