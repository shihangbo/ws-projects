
class SyncHook {
  constructor() {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    this.tasks.forEach(task => task(...args))
  }
}

let hook = new SyncHook()
module.exports = hook

hook.tap('node', function(name) {
  console.log('learn node', name)
})
hook.tap('react', function(name) {
  console.log('learn react', name)
})
hook.call('watson')
