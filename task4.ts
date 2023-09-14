type Obj = { [key: string]: any }

const obj1: Obj = {
  here: {is: 'on', other: '3'},
  object: 'Y'
}

const obj2: Obj = {
  here: {is: 'on', other: '2'},
  object: 'Y'
}

const deepEqual = (obj1: Obj, obj2: Obj): boolean => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return obj1 === obj2
  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (!keys2.some(k => k === key) || !deepEqual(obj1[key], obj2[key])) return false
  }
  return false
}

console.log(deepEqual(obj1, obj2))
