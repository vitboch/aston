# Training tasks

```js
function asyncActions() {
  console.log('Start of asyncActions')

  const action1 = new Promise((resolve) => {
    console.log('Action 4')
    setTimeout(() => {
      console.log('Action 1 completed')
      resolve()
    }, 2000)
  })

  const action2 = new Promise((resolve) => {
    console.log('Action 5')
    setTimeout(() => {
      console.log('Action 2 completed')
      resolve()
    }, 1000)
  })

  return action1.then(() => action2)
}

asyncActions()
// Start of asyncActions
// Action 4
// Action 5
// Action 2 completed
// Action 1 completed

// Macrotask_queue = set1(2), set2(1)
```

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

const printFullName = person.getFullName.bind(person)

person.getFullName() // John Doe
printFullName() // undefined undefined
```

```js
const obj = {
  name: 'Alice',
  sayHello: function () {
    setTimeout(function () {
      console.log('Hello, ' + this.name)
    }, 1000)
  }
}

obj.sayHello() // Hello undefined
```

```js
const obj2 = {
  name: 'Bob',
  logName: function (callback) {
    console.log('Logging name: ' + this.name)
    callback()
  }
}

function callbackFunction() {
  console.log('Callback executed for ' + this.name)
}

obj2.logName(callbackFunction)
// Logging name: Bob
// Callback executed for undefined
```

```js
// Создаем конструктор родительского класса
function Animal(name) {
  this.name = name
}

// Добавляем метод в прототип родительского класса
Animal.prototype.sayHello = function () {
  console.log('Hello, I am ' + this.name)
}

// Создаем конструктор дочернего класса, который наследует Animal
function Cat(name) {
  Animal.call(this, name)
}

// Наследуем прототип Animal
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

// Переопределяем метод sayHello для Cat
Cat.prototype.sayHello = function () {
  console.log('Meow, I am ' + this.name)
}

// Создаем объекты и вызываем методы
const animal = new Animal('Generic Animal')
const cat = new Cat('Fluffy')

animal.sayHello() // Hello, I am Generic Animal
cat.sayHello() // Meow, I am Fluffy
```

```js
console.log('Start')

setTimeout(function () {
  console.log('Timeout 1')
}, 0)

console.log('Middle')

setTimeout(function () {
  console.log('Timeout 2')
}, 0)

console.log('End')

// Start Middle End Timeout 1 Timeout 2
```

```js
console.log('Start')

Promise.resolve().then(function () {
  console.log('Promise 1')
})

console.log('Middle')

Promise.resolve().then(function () {
  console.log('Promise 2')
})

console.log('End')

// Start Middle End Promise 1 Promise 2
```

```js
function recursiveTimeout(counter) {
  if (counter <= 0) {
    console.log('Done')
    return
  }

  console.log('Counter:', counter)

  setTimeout(function () {
    recursiveTimeout(counter - 1)
  }, 1000)
}

recursiveTimeout(5)

// Counter 5
// Counter 4
// Counter 3
// Counter 2
// Counter 1
// Done
```

```js
function sayHi() {
  console.log(name) // undefined
  console.log(age) // ReferenceError age before initialization
  var name = 'Lydia'
  let age = 21
}

sayHi()
```

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('first', i), 1) // 3 => first 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log('second', i), 1) // 3 => second 0..1..2
}
```

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

console.log(shape.diameter()) // 20
console.log(shape.perimeter()) // NaN
```

```js
console.log(+true) // 1
console.log(!'Lydia') // false
```

```js
let c = {greeting: 'Hey!'}
let d

d = c
c.greeting = 'Hello'
console.log(d.greeting) // Hello
```

```js
let number = 0
console.log(number++) // 0
console.log(++number) // 2
console.log(number) // 2
```

```js
function checkAge(data) {
  if (data === {age: 18}) {
    console.log('Ты взрослый!')
  } else if (data == {age: 18}) {
    console.log('Ты все еще взрослый.')
  } else {
    console.log(`Хмм.. Кажется, у тебя нет возраста.`)
  }
}

checkAge({age: 18}) // Хмм.. Кажется, у тебя нет возраста.
```

```js
function getAge() {
  'use strict'
  age = 21
  console.log(age)
}

getAge() // ReferenceError

////////////////////////////////////////////////////////////////////////////////////////////////////

const sum = eval('10*10+5')
console.log(sum) // 105
```

```js
console.log('100' + 5) //'1005'
console.log(Boolean('Hello')) //true
console.log(typeof null) // Object
console.log(typeof function () {
}) // function
```

```js
var a = 10
var b = 20
a.b = 15
console.log('a', a) // 10
console.log('a.b', a.b) // undefined
console.log(b) // 20
```

```js
var a = {b: 1}
c = Object.create(a)

console.log(c.b) // 1
delete c.b
console.log(c.b) // 1
delete a.b
console.log(c.b) // undefined
a.z = 2
console.log(c.z) // 2
c.z = 3
console.log(a.z) // 2
```

```js
var a = 1

function foo() {
  console.log(a) // 1
}

function bar() {
  var a = 2
  foo()
}

console.log(a) // 1
bar()
```

```js
var l = 25
var x = 11

function bar(foo) {
  var x = 30
  foo()
}

function foo() {
  console.log('x', x) // 11
}

foo.x = 20
bar.x = 40

bar(foo)

l.x = 100

console.log('foo.x', foo.x) // 20
console.log(bar.l) // undefined
console.log(l.x) // undefined
```

```js
function fA() {
  const a = 10

  function fB() {
    const b = 20

    function fC() {
      const c = 30
      console.log('c', c, 'b', b, 'a', a) // 30 20 10
    }

    fC()
    console.log('b', b, 'a', a) // 20 10
  }

  fB()
  console.log('a', a) // 10
}

fA()
```

```js
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // 10 ... 10
//   }, 1000);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // 1...9
//   }, 1000);
// }

// for (var i = 0; i < 10; i++) {
//   let j = i
//   setTimeout(function () {
//     console.log(j); // 1...9
//   }, 1000);
// }

for (var i = 0; i < 10; i++) {
  setTimeout(
    function () {
      console.log(this) // 1...9
    }.bind(i),
    1000
  )
}
```

```js
const obj4 = {
  x: 'yandex',
  a: function f() {
    console.log(this.x)
  },
  b: () => {
    console.log('arrow', this.x)
  }
}

obj4.a() // yandex
obj4.b() // undefined
```

```js
function makeCounter() {
  let counter = 0
  return function () {
    return ++counter
  }
}

let someCounter = makeCounter()

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(someCounter())) // 2...11
}

console.log(someCounter()) // 1
```
