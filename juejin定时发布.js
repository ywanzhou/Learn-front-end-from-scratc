class timer {
  timerList = []

  addTimer(name, callback, time = 1000) {
    this.timerList.push({
      name,
      callback,
      time,
    })
    this.runTimer(name)
  }

  runTimer(name) {
    const _this = this
    ;(function inner() {
      const task = _this.timerList.find(item => {
        return item.name === name
      })
      if (!task) return
      task.t = setTimeout(() => {
        task.callback()
        clearTimeout(task.t)
        inner()
      }, task.time)
    })()
  }

  clearTimer(name) {
    const taskIndex = this.timerList.findIndex(item => {
      return item.name === name
    })
    if (taskIndex !== -1) {
      // 由于删除该计时器时可能存在该计时器已经入栈，所以要先清除掉，防止添加的时候重复计时
      clearTimeout(this.timerList[taskIndex].t)
      this.timerList.splice(taskIndex, 1)
    }
  }
}
const t = new timer()
const btn = document.getElementsByClassName(
  'ui-btn btn primary medium default',
)[0]
// const time = 1644422400000
const time = 1644407252858
t.addTimer(
  'release',
  () => {
    if (Date.now() >= time) {
      btn.click()
      t.clearTimer('release')
    } else {
      console.log(Date.now())
    }
  },
  10,
)
