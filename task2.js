const counter = {
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

// 1. Spread syntax
const counter1 = {...counter}

// 2. Сopying properties
const counter2 = {
  count: counter1.count,
  increment: counter1.increment,
  decrement: counter1.decrement,
  reset: counter1.reset
}

// 3. Serialization and deserialization
const counter3 = JSON.parse(JSON.stringify(counter1))

// 4. Object.assign
const counter4 = Object.assign({}, counter1)

console.log(counter1.count)
console.log(counter2.count)
console.log(counter3.count)
console.log(counter4.count)
