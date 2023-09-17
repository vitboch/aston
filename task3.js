const person = {name: 'Aston'}

function getInfo(phone, email) {
  console.log(`Имя: ${this.name}, Тел: ${phone}, Email: ${email} `)
}

function bind(func, context, ...rest) {
  return function (...args) {
    const uniqId = Symbol('id')
    context[uniqId] = func
    const result = context[uniqId](...rest, ...args)
    delete context[uniqId]
    return result
  }
}

getInfo.bind(person)('1234567890', 'aston@aston.com')
getInfo.bind(person, '1234567890')('aston@aston.com')
getInfo.bind(person, '1234567890', 'aston@aston.com')()
