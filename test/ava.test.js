const test = require('ava')

const subject = require('../index')

const functionThatThrowsSomething = () => {
  throw new TypeError('error!')
}

const functionThatThrowsNothing = () => {
  return 'nothing'
}

test('throws', (t) => {
  const error = t.throws(() => {
    functionThatThrowsSomething()
  }, TypeError)

  t.is(error.message, 'error!')
})

test('notThrows', (t) => {
  t.notThrows(() => {
    functionThatThrowsNothing()
  }, TypeError)
})

test('this one always passes', (t) => {
  t.pass('passed!')
})

test.failing('this is meant to fail', (t) => {
  t.fail('failure!')
})

test('Is an object and has the correct methods', (t) => {
  t.truthy(typeof subject === 'object')
  t.falsy(typeof subject === 'function')

  t.true(typeof subject === 'object')
  t.false(typeof subject === 'function')

  t.is(typeof subject, 'object')
  t.not(typeof subject, 'function')

  t.deepEqual(typeof subject, 'object')
  t.notDeepEqual(typeof subject, 'function')

  t.regex(typeof subject, /([a-z])\w+/)
  t.notRegex(typeof subject, /([A-Z])\w+/)

  t.ifError(false) // this is a silly one, it checks if the value is false or not. Throws an error if not.
})
