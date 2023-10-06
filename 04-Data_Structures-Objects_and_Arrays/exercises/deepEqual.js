function deepEqual(value1, value2) {
  if (value1 === value2) return true

  if (
    value1 === null ||
    typeof value1 !== "object" ||
    value2 === null ||
    typeof value2 !== "object"
  ) {
    return false
  }

  const keys1 = Object.keys(value1)
  const keys2 = Object.keys(value2)

  if (keys1.length !== keys2.length) return false

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(value1[key], value2[key]))
      return false
  }

  return true
}

let obj = { here: { is: "an" }, object: 2 }

// true
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
console.log(deepEqual([1, 2, 3], [1, 2, 3]))
// false
console.log(deepEqual(obj, { here: { is: "AN" }, object: 2 }))
console.log(deepEqual([1, 2, 3, 4], [1, 2, 3, 5]))
