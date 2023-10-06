const list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
}

function arrayToList(arr) {
  let list = null

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list }
  }

  return list
}

function listToArray(list) {
  const arr = []

  for (let i = list; i; i = i.rest) {
    arr.push(i.value)
  }

  return arr
}

function prepend(value, list) {
  return { value, rest: list }
}

function nth(list, n) {
  if (!list) return "Value doesn't exist"
  if (n === 0) return list.value

  return nth(list.rest, n - 1)
}

console.log(listToArray(prepend(0, arrayToList([1, 2, 3]))))
console.log(nth(arrayToList([1, 2, 3, 4, 5]), 4))
