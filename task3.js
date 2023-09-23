const printWithDelay = arr => arr.forEach((_, i) => setTimeout(() => console.log(i), 3000 * (i + 1)))
printWithDelay([10, 12, 15, 21])
