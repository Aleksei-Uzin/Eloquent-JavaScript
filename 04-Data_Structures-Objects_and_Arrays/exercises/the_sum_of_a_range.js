function range(start, end, step = start < end ? 1 : -1) {
  const res = []

  if (start < end) {
    for (let i = start; i <= end; i += step) res.push(i)
  } else {
    for (let i = start; i >= end; i += step) res.push(i)
  }

  return res
}

function sum(numbs) {
  let sum = 0

  for (let num of numbs) sum += num

  return sum
}
