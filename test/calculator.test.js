const test = require('ava')
const calculator = require('../lib/calculator')

test('Calculator adds 3 and 2 and returns 5', (t) => {
  t.is(calculator.add(3, 2), 5)
})

test('Calculator adds 5 and 5 and returns 10', (t) => {
  t.is(calculator.add(5, 5), 10)
})

test('Calculator subtracts 5 from 10 and returns 5', (t) => {
  t.is(calculator.subtract(5, 10), 5)
})

test('Calculator subtracts 2 from 10 and returns 8', (t) => {
  t.is(calculator.subtract(2, 10), 8)
})

test('Calculator multiplys 5 by 10 and returns 50', (t) => {
  t.is(calculator.multiply(5, 10), 50)
})

test('Calculator multiplys 3 by 7 and returns 21', (t) => {
  t.is(calculator.multiply(3, 7), 21)
})

test('Calculator divides 3 by 0 and returns 0', (t) => {
  t.is(calculator.divide(3, 0), Infinity)
})

test('Calculator divides 4 by 2 and returns 2', (t) => {
  t.is(calculator.divide(4, 2), 2)
})
