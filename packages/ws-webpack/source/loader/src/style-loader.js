let loaderUtils = require('loader-utils')
function loader(source) {
  let str = `
    let el=document.createElement('style')
    el.innerHTML=${JSON.stringify(source)}
    document.head.appendChild(el)
  `
  return str
}
loader.pitch = function(remainingRequest) {
  let str = `
    let el=document.createElement('style')
    el.innerHTML=require(${loaderUtils.stringifyRequest(this,'!!'+remainingRequest)})
    document.head.appendChild(el)
  `
  return str
}
module.exports=loader