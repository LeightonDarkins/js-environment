const test = require('ava')
const jsEnvironment = require('../index')

test('Works', (t) => {
  t.is(jsEnvironment(), 77)
})
