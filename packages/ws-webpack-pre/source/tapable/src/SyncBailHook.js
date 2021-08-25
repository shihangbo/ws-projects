
// 返回 非undefined 结果，就停止运行
class SyncBailHook {
  constructor() {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    let ret
    let index = 0
    do {
      ret = this.tasks[index++](...args)
    } while (ret === undefined && index < this.tasks.length);
  }
}

let hook = new SyncBailHook()
module.exports = hook

hook.tap('vue', function(name) {
  console.log('learn vue', name)
  return undefined
})
hook.tap('node', function(name) {
  console.log('learn node', name)
  return '想停止学习'
})
hook.tap('react', function(name) {
  console.log('learn react', name)
})
hook.call('watson')