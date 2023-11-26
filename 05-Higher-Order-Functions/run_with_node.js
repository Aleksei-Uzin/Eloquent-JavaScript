// load dependencies
require('./loadUtils')('characterScript.js', 'countBy.js', 'scripts.js')

function textScripts(text, field = 'name') {
  const scripts = countBy(text, char => {
    const script = characterScript(char.codePointAt(0))
    return script ? script[field] : 'none'
  }).filter(({ name }) => name !== 'none')

  const total = scripts.reduce((acc, { count }) => acc + count, 0)

  if (total === 0) return 'No scripts found'

  return scripts
    .map(({ name, count }) => `${Math.round((count * 100) / total)}% ${name}`)
    .join(', ')
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'))

/**
 * Exercise: Dominant writing direction
 *
 */

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.direction : 'none'
  }).filter(({ name }) => name !== 'none')

  if (counted.length === 0) return 'ltr'

  return counted.reduce((acc, val) => (acc.count > val.count ? acc : val)).name
}

// → ltr
console.log(dominantDirection('Hello!'))
// → rtl
console.log(dominantDirection('Hey, مساء الخير'))
