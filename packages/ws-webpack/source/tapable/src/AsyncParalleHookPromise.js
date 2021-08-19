
class AsyncParalleHook {
  constructor() {
    this.index = 0
    this.tasks = []
  }
  tapPromise(name, task) {
    this.tasks.push(task)
  }
  promise(...args) {
    const taskRet = this.tasks.map(task => task(...args))
    return Promise.all(taskRet)
  }
}

let hook = new AsyncParalleHook()
module.exports = hook

hook.tapPromise('vue', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('learn vue', name)
      resolve()
    }, 1000)
  })
})
hook.tapPromise('node', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('learn node', name)
      resolve()
    }, 1000)
  })
})
hook.tapPromise('react', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('learn react', name)
      resolve()
    }, 1000)
  })
})
hook.promise('watson').then(() => {
  console.log('end')
})
