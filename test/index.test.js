const test = require('ava')

const subject = require('../index')

test('Is an object and has the correct methods', (t) => {
  t.is(typeof subject, 'object')
  t.is(typeof subject.calculateGST, 'function')
  t.is(typeof subject.addServiceFeeToPrice, 'function')
  t.is(typeof subject.calculateSalesTax, 'function')
})

test('calculateGST() returns 7.7 for 77', (t) => {
  t.is(subject.calculateGST(77), 7.7)
})

test('calculateGST() returns 6.32 for 63.2', (t) => {
  t.is(subject.calculateGST(63.2), 6.32)
})

test('addServiceFeeToPrice() returns 50 for 30', (t) => {
  t.is(subject.addServiceFeeToPrice(30), 50)
})

test('addServiceFeeToPrice() returns 65 for 45', (t) => {
  t.is(subject.addServiceFeeToPrice(45), 65)
})

test('calculateSalesTax() returns 9 for 100', (t) => {
  t.is(subject.calculateSalesTax(100), 9)
})

test('calculateSalesTax() returns 18 for 200', (t) => {
  t.is(subject.calculateSalesTax(200), 18)
})
