const subject = require('../index')

describe('index', () => {
  it('is an object', () => {
    expect(typeof subject).toBe('object')
  })

  it('has the correct methods', () => {
    expect(typeof subject.calculateGST).toBe('function')
    expect(typeof subject.addServiceFeeToPrice).toBe('function')
    expect(typeof subject.calculateSalesTax).toBe('function')
  })

  describe('.calculateGST()', () => {
    it('returns 7.7 for 77', () => {
      expect(subject.calculateGST(77)).toBe(7.7)
    })

    it('returns 6.32 for 63.2', () => {
      expect(subject.calculateGST(63.2)).toBe(6.32)
    })
  })

  describe('.addServiceFeeToPrice()', () => {
    it('returns 50 for 30', () => {
      expect(subject.addServiceFeeToPrice(30)).toBe(50)
    })

    it('returns 65 for 45', () => {
      expect(subject.addServiceFeeToPrice(45)).toBe(65)
    })
  })

  describe('.calculateSalesTax()', () => {
    it('returns 9 for 100', () => {
      expect(subject.calculateSalesTax(100)).toBe(9)
    })

    it('returns 18 for 200', () => {
      expect(subject.calculateSalesTax(200)).toBe(18)
    })
  })
})
