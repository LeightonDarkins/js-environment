const test = require('ava')

const subject = require('../lib/calculator')

test('is an object and has the correct methods', (t) => {
  t.is(typeof subject, 'object')
  t.is(typeof subject.add, 'function')
  t.is(typeof subject.subtract, 'function')
  t.is(typeof subject.multiply, 'function')
  t.is(typeof subject.divide, 'function')
})

test('adds 3 and 2 and returns 5', (t) => {
  t.is(subject.add(3, 2), 5)
})

test('adds 5 and 5 and returns 10', (t) => {
  t.is(subject.add(5, 5), 10)
})

test('subtracts 5 from 10 and returns 5', (t) => {
  t.is(subject.subtract(5, 10), 5)
})

test('subtracts 2 from 10 and returns 8', (t) => {
  t.is(subject.subtract(2, 10), 8)
})

test('multiplys 5 by 10 and returns 50', (t) => {
  t.is(subject.multiply(5, 10), 50)
})

test('multiplys 3 by 7 and returns 21', (t) => {
  t.is(subject.multiply(3, 7), 21)
})

test('divides 3 by 0 and returns 0', (t) => {
  t.is(subject.divide(3, 0), Infinity)
})

test('divides 4 by 2 and returns 2', (t) => {
  t.is(subject.divide(4, 2), 2)
})
