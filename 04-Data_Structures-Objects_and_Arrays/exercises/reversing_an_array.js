/**
 * https://en.wikipedia.org/wiki/In-place_algorithm
 *
 */

function reverseArray(arr) {
  const len = arr.length - 1
  const res = []

  for (let i = 0; i <= len; i++) res[len - i] = arr[i]

  return res
}

function reverseArrayInPlace(arr) {
  const len = arr.length

  for (let i = 0; i < Math.floor(len / 2); i++) {
    const tmp = arr[i]
    arr[i] = arr[len - 1 - i]
    arr[len - 1 - i] = tmp
  }

  return arr
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = old
  }
  return array
}
