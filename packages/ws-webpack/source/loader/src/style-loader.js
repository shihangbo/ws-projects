function loader(source) {
  let str = `
    let el=document.createElement('style')
    el.innerHTML=${JSON.stringify(source)}
    document.head.appendChild(el)
  `
  return str
}
module.exports=loader