// 1. Object literal notation
const counter1 = {
  count: 0,
  increment: function () {
    this.count++
  },
  decrement: function () {
    this.count--
  },
  reset: function () {
    this.count = 0
  }
}

// 2. Constructor function
function CreateCounter() {
  this.count = 0

  this.increment = function () {
    this.count++
  }

  this.decrement = function () {
    this.count--
  }

  this.reset = function () {
    this.count = 0
  }
}

const counter2 = new CreateCounter()

// 3. Class syntax
class CounterClass {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }

  reset() {
    this.count = 0
  }
}

const counter3 = new CounterClass()

// 4. Object.create
const counter4 = Object.create({
  count: 0,
  increment: function () {
    this.count++
  },
  decrement: function () {
    this.count--
  },
  reset: function () {
    this.count = 0
  }
})

// 5. Object.assign
const counter5 = Object.assign({}, {
  count: 0,
  increment: function () {
    this.count++
  },
  decrement: function () {
    this.count--
  },
  reset: function () {
    this.count = 0
  }
})

console.log(counter1.count)
console.log(counter2.count)
console.log(counter3.count)
console.log(counter4.count)
console.log(counter5.count)
