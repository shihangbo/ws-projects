
const webpack = require('webpack')
const webpackOptions = require('./webpack.config.js')

const compiler = webpack(webpackOptions)

debugger

compiler.run((err,stats) => {
  console.log(111, err)
  console.log(
    stats.toJson({
      entries:true,
      chunks:true,
      modules:true,
      assets:true
    })
  )
})