class Timer {
  private startTime: number
  private elapsedTime: number
  private timerId: NodeJS.Timeout | null

  constructor() {
    this.startTime = 0
    this.elapsedTime = 0
    this.timerId = null
  }

  start() {
    if (this.timerId) return

    this.startTime = Date.now() - this.elapsedTime
    this.timerId = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime
    }, 1)
  }

  stop() {
    if (!this.timerId) return

    clearInterval(this.timerId)
    console.log(`Loading time: ${this.elapsedTime} ms`)
    this.timerId = null
  }

  reset() {
    this.stop()
    this.elapsedTime = 0
  }
}

export const timer = new Timer()
