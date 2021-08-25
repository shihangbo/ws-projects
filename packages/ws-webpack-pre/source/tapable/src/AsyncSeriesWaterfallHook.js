
class AsyncSeriesWaterfallHook {
  constructor() {
    this.index = 0
    this.tasks = []
  }
  tapAsync(name, task) {
    this.tasks.push(task)
  }
  callAsync(...args) {
    let finalCallback = args.pop()
    let index = 0
    let next = (err, data) => {
      if(!this.tasks.length || !this.tasks[index]) finalCallback(data)
      else if (index === 0) {
        this.tasks[index](...args, next)
      } else {
        this.tasks[index](data, next)
      }
      index++
    }
    next()
  }
}

let hook = new AsyncSeriesWaterfallHook()
module.exports = hook

hook.tapAsync('vue', (name, done) => {
  setTimeout(() => {
    console.log('learn vue', name)
    done(null, 'result vue')
  }, 1000)
})
hook.tapAsync('node', (name, done) => {
  setTimeout(() => {
    console.log('learn node', name)
    done('error', 'reslult node')
  }, 1000)
})
hook.tapAsync('react', (name, done) => {
  setTimeout(() => {
    console.log('learn react', name)
    done(null, 'reslult react')
  }, 1000)
})
hook.callAsync('watson', (data) => {
  console.log('end', data)
})
