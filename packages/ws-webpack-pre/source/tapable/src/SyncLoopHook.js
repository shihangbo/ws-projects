
// 同步遇到某个不返回 undefined值 的监听函数，会多次执行
class SyncLoopHook {
  constructor(limit) {
    this.index = 0
    this.limit = limit
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    this.tasks.forEach(tast => {
      this.index = 0
      let ret;
      do {
        ret = tast(...args)
      } while (ret !== undefined)
    })
  }
}

let hook = new SyncLoopHook(3)
module.exports = hook

hook.tap('vue', (name) => {
  console.log('vue' + hook.index + '，ok' + name)
  return (++hook.index) === hook.limit ? undefined : ('vue' + hook.index + '，ok' + name)
})
hook.tap('node', (name) => {
  console.log('node', name)
})
hook.tap('react', (name) => {
  console.log('react', name)
})
hook.call(', watson')
