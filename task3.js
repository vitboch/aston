function makeCounter() {
  let count = 0

  return function () {
    return count++
  }
}

const counter = makeCounter()

console.log(makeCounter())
console.log(counter())
console.log(counter())
console.log(counter())
