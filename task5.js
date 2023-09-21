arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
total = 13

const firstSum = (arr, total) => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        result.push(arr[i], arr[j])
        return result
      }
    }
  }

  return result
}

console.log(firstSum(arr, total)) //result = [4, 9]

// Сложность алгоритма: O(n^2)

