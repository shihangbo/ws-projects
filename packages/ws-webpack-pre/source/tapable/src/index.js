
// 同步方法
let syncHook = require('./SyncHook')
let syncBailHook = require('./SyncBailHook')
let syncWaterfallHook = require('./SyncWaterfallHook')
let syncLoopHook = require('./SyncLoopHook')

// 异步方法：串行 / 并行 
// 等待所有的异步方法执行后在执行回调
let asyncParraleHook = require('./AsyncParalleHook')
let asyncParraleHookPromise = require('./AsyncParalleHookPromise')
let asyncSeriesHook = require('./AsyncSeriesHook')
let asyncSeriesWaterfallHook = require('./AsyncSeriesWaterfallHook')

module.exports = {
  syncHook,
  syncBailHook,
  syncWaterfallHook,
  syncLoopHook,

  asyncParraleHook,
  asyncParraleHookPromise,
  asyncSeriesHook,
  asyncSeriesWaterfallHook
}