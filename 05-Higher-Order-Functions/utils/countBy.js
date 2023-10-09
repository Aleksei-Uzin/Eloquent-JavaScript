function countBy(items, groupName) {
  const counts = []

  for (let item of items) {
    const name = groupName(item)
    const known = counts.findIndex(c => c.name === name)

    if (known === -1) counts.push({ name, count: 1 })
    else counts[known].count++
  }

  return counts
}
