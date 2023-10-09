function characterScript(code) {
  for (let script of SCRIPTS) {
    const isInRange = script.ranges.some(
      ([from, to]) => code >= from && code < to
    )

    if (isInRange) return script
  }

  return null
}
