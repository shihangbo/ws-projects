
class AsyncParalleHook {
  constructor() {
    this.index = 0
    this.tasks = []
  }
  tapAsync(name, task) {
    this.tasks.push(task)
  }
  callAsync(...args) {
    const finalCallback = args.pop()
    const done = () => {
      this.index++
      if (this.index === this.tasks.length) {
        finalCallback()
      }
    }
    this.tasks.forEach(task => {
      task(...args, done)
    })
  }
}

let hook = new AsyncParalleHook()
module.exports = hook

hook.tapAsync('vue', (name, next) => {
  setTimeout(() => {
    console.log('learn vue', name)
    next()
  }, 1000)
})
hook.tapAsync('node', (name, next) => {
  setTimeout(() => {
    console.log('learn node', name)
    next()
  }, 1000)
})
hook.tapAsync('react', (name, next) => {
  setTimeout(() => {
    console.log('learn react', name)
    next()
  }, 1000)
})
hook.callAsync('watson', () => {
  console.log('end')
})
