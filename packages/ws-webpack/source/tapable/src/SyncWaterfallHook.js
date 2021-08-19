
// 上一个函数的返回值，作为下一个函数的参数执行
class SyncWaterfallHook {
  constructor() {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    let [first, ...others] = this.tasks
    others.reduce((total, curr)=>{
      return curr(total)
    }, first(...args))
  }
}

let hook = new SyncWaterfallHook()
module.exports = hook

hook.tap('vue', function(name) {
  console.log(name)
  return 'vue，ok' + name
})
hook.tap('node', function(name) {
  console.log(name)
  return 'node，ok' + name
})
hook.tap('react', function(name) {
  console.log(name)
  return 'react ok' + name
})
hook.call(', watson')