
// 同步方法
let syncHook = require('./SyncHook')
let syncBailHook = require('./SyncBailHook')
let syncWaterfallHook = require('./SyncWaterfallHook')
let syncLoopHook = require('./SyncLoopHook')

// 异步方法

module.exports = {
  syncHook,
  syncBailHook,
  syncWaterfallHook,
  syncLoopHook
}