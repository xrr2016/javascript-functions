class LazyMan {
    constructor(name = 'Tom', tasks = []) {
        this.name = name
        this.tasks = tasks
        const self = this
        const fn = ((name) => {
            return () => {
                console.log(`Hi! This is ${name} !`);
                self.next()
            }
        })(name)
        this.tasks.push(fn)
        setTimeout(() => {
            self.next()
        }, 0)
    }
    next() {
        const fn = this.tasks.shift()
        fn && fn()
    }
    eat(food) {
        const self = this
        const fn = ((food) => {
            return () => {
                console.log(`Eatting ${food} ~~`)
                self.next()
            }
        })(food)
        this.tasks.push(fn)
        return this
    }
    sleep(time) {
        const self = this
        const fn = ((time) => {
            setTimeout(() => {
                console.log(`Wake up after ${time} hours`)
                self.next()
            }, time)
        })(time)
        this.tasks.push(fn)
        return this
    }
    sleepFrist(time) {
        const self = this
        const fn = ((time) => {
            return () => {
                setTimeout(() => {
                  console.log(`Wake up after ${time} hours`)
                  self.next()
                },time)
            }
        })(time)
        this.tasks.unshift(fn)
        return this
    }
}
function aLazyMan(name,tasks){
  return new LazyMan(name,tasks)
}
