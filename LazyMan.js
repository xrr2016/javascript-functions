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
        setTimeout(() => { self.next() },0)
    }
    next(){
      const fn = this.tasks.shift()
      fn && fn()
    }
    eat(food){
      
    }
}
