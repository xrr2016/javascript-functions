class LazyMan {
    constructor(name = 'Tom', tasks = []) {
        this.name = name
        this.tasks = tasks
        const self = this
        const fn = ((name) => {
            return () => {
                console.log('------------------>')
                console.log(`Hi! This is ${name} !`);
                self.next()
            }
        })(name)
        this.tasks.push(fn)
        setTimeout(() => {
            self.next()
        }, 0)
    }
    next(time = 0) {
        const fn = this.tasks.shift()
        setTimeout(()=>{
          fn && fn()
        },time)
    }
    eat(food) {
        const self = this
        const fn = ((food) => {
            return () => {
                console.log('------------------>')
                console.log(`Eatting ${food} ~~`)
                self.next()
            }
        })(food)
        this.tasks.push(fn)
        return this
    }
    first(thing) {
        const self = this
        const fn = ((thing) => {
            return () => {
                console.log('------------------>')
                console.log(`Do this ${thing} first`)
                self.next()
            }
        })(thing)
        this.tasks.unshift(fn)
        return this
    }
    sleep(time) {
        const self = this
        const fn = ((time) => {
            setTimeout(() => {
                console.log('------------------>')
                console.log(`Sleep  ${time} hours`)
                self.next()
            }, time * 1000)
        })(time)
        this.tasks.push(fn)
        return this
    }
    takeABreak(time = 1){
      const self =  this
      const fn = ((time)=>{
        return () => {
          setTimeout(()=>{
            console.log('------------------>')
            console.log(`Take a break for ${time} hours`)
            self.next()
          },time * 1000)
        }
      })(time)
      this.tasks.push(fn)
      return this
    }
    play(time) {
        const self = this
        const fn = ((time) => {
            return () => {
                setTimeout(() => {
                    console.log('------------------>')
                    console.log(`Play ${time} hours`)
                    self.next()
                }, time * 1000)
            }
        })(time)
        this.tasks.push(fn)
        return this
    }
}

function aLazyMan(name, tasks) {
    return new LazyMan(name, tasks)
}
