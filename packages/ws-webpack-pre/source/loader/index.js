// 正常打包
// const a = 11
// const b = 22
// let c = a + b
// console.log(c)

let title = require('./a.js')
console.log(title)

// 样式引用
// import '../../index.less'

// 模版的图片引用
// import p from '../../public/1111.jpeg'
// let img = document.createElement('img')
// img.src = p
// document.body.appendChild(img)


// 引用行内loader
// let inlineLoaderJs = require('!!inline-loader!./a.js')
// console.log('inlineLoaderJs', inlineLoaderJs)