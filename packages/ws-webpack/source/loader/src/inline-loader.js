function loader(source) {
  console.log('inline-loader~~~')
  return source
}
loader.pitch = function () {
  console.log('inline-loader~~~pitch')
}
module.exports = loader