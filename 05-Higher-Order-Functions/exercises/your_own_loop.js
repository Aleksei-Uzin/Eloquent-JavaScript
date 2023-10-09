const loop = (value, toTest, toUpdate, getValue) => {
  while (toTest(value)) {
    getValue(value)
    value = toUpdate(value)
  }
}
