const subject = require('../lib/calculator')

describe('calculator', () => {
  it('is an object', () => {
    expect(typeof subject).toBe('object')
  })

  it('has the correct methods', () => {
    expect(typeof subject.add).toBe('function')
    expect(typeof subject.subtract).toBe('function')
    expect(typeof subject.multiply).toBe('function')
    expect(typeof subject.divide).toBe('function')
  })

  describe('.add()', () => {
    it('adds 3 and 2 and returns 5', () => {
      expect(subject.add(3, 2)).toBe(5)
    })

    it('adds 5 and 5 and returns 10', () => {
      expect(subject.add(5, 5)).toBe(10)
    })
  })

  describe('.subtract()', () => {
    it('subtracts 5 from 10 and returns 5', () => {
      expect(subject.subtract(5, 10)).toBe(5)
    })

    it('subtracts 2 from 10 and returns 8', () => {
      expect(subject.subtract(2, 10)).toBe(8)
    })
  })

  describe('.multiply()', () => {
    it('multiplys 5 by 10 and returns 50', () => {
      expect(subject.multiply(5, 10)).toBe(50)
    })

    it('multiplys 3 by 7 and returns 21', () => {
      expect(subject.multiply(3, 7)).toBe(21)
    })
  })

  describe('.divide()', () => {
    it('divides 3 by 0 and returns 0', () => {
      expect(subject.divide(3, 0)).toBe(Infinity)
    })

    it('divides 4 by 2 and returns 2', () => {
      expect(subject.divide(4, 2)).toBe(2)
    })
  })
})
