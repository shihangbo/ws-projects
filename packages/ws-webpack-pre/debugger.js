
const webpack = require('webpack')
const webpackOptions = require('./webpack.config.js')
debugger
const compiler = webpack(webpackOptions)

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