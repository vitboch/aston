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

// Создание класса PersonThree c get и set для поля name и конструктором, который является наследником от класса Person
class PersonThree extends Person {
  constructor(name, age) {
    super(name, age)
  }

  get() {
    return this.name
  }

  set(newName) {
    this.name = newName
  }
}

const personThree = new PersonThree('Констанция', 25)
personThree.set('Миледи')

console.log('\nСоздание класса PersonThree c get и set для поля name и конструктором, ' +
  'который является наследником от класса Person:\n',
  `Привет! Меня зовут ${personThree.get()}!`)
