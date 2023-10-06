function tableFor(event, journal) {
  let table = [0, 0, 0, 0]

  for (let { events, squirrel } of journal) {
    let index = 0
    if (events.includes(event)) index += 1
    if (squirrel) index += 2
    table[index] += 1
  }

  return table
}
