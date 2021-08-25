
class AsyncSeriesHook {
  constructor() {
    this.index = 0
    this.tasks = []
  }
  tapAsync(name, task) {
    this.tasks.push(task)
  }
  callAsync(...args) {
    let [first, ...others] = this.tasks
    return others.reduce((total, curr) => {
      return total.then(() => curr(...args))
    }, first(...args))
  }
}

let hook = new AsyncSeriesHook()
module.exports = hook

hook.tapAsync('vue', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('learn vue', name)
      resolve()
    }, 1000)
  })
})
hook.tapAsync('node', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('learn node', name)
      resolve()
    }, 1000)
  })
})
hook.tapAsync('react', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('learn react', name)
      resolve()
    }, 1000)
  })
})
hook.callAsync('watson').then(() => {
  console.log('end')
})
