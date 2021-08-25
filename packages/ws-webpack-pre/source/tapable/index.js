

let {
  syncHook,
  syncBailHook,
  syncWaterfallHook,
  syncLoopHook,

  
} = require('./src/index.js')

syncBailHook.tap('node', function(name) {
  console.log('learn node', name)
})
syncBailHook.tap('react', function(name) {
  console.log('learn react', name)
})
syncBailHook.call('watson')