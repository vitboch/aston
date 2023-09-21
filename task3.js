// Создание объекта Person с помощью литерала объекта
const person1 = {
  name: 'Дартаньян',
  age: 18,
  greet: function () {
    return `Привет, меня зовут ${this.name}!`
  },
  introduce: function () {
    return `Мне ${this.age}`
  },
  logInfo: function () {
    return `Имя: ${this.name}, возраст: ${this.age}`
  }
}

console.log('Создание объекта Person с помощью литерала объекта:\n', person1)

// Создание объекта Person с помощью конструктора Object
const person2 = new Object()
person2.name = 'Атос'
person2.age = 27
person2.greet = function () {
  return `Привет, меня зовут ${this.name}!`
}
person2.introduce = function () {
  return `Мне ${this.age}`
}
person2.logInfo = function () {
  return `Имя: ${this.name}, возраст: ${this.age}`
}

console.log('\nСоздание объекта Person с помощью конструктора Object:\n', person2)

// Создание объекта Person с помощью функции-конструктора
function CreatePerson(name, age) {
  this.name = name
  this.age = age
  this.greet = function () {
    return `Привет, меня зовут ${this.name}!`
  }
  this.introduce = function () {
    return `Мне ${this.age}`
  }
  this.logInfo = function () {
    return `Имя: ${this.name}, возраст: ${this.age}`
  }
}

const person3 = new CreatePerson('Портос', 24)
console.log('\nСоздание объекта Person с помощью функции-конструктора:\n', person3)

// Создание объекта Person с помощью класса
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return `Привет, меня зовут ${this.name}!`
  }

  introduce() {
    return `Мне ${this.age}`
  }

  logInfo() {
    return `Имя: ${this.name}, возраст: ${this.age}`
  }
}

const person4 = new Person('Арамис', 21)
console.log('\nСоздание объекта Person с помощью класса:\n', person4)

// Создание объекта Person2, в котором доступны методы объекта Person
const Person2 = Object.assign({}, person1)
console.log('\nСоздание объекта Person2, в котором доступны методы объекта Person:\n',
  Person2.greet(), Person2.introduce())
