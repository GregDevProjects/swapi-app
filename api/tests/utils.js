const assert = require('assert')
const { commaStringToArray } = require('../utils')
const { expect } = require('chai')

describe('utils', () => {
  describe('commaStringToArray', () => {
    it('returns array', () => {
      const actual = commaStringToArray('one,two')
      assert(Array.isArray(actual))
    })
    it('strips whitespace', () => {
      const expected = ['a', 'b']
      const actual = commaStringToArray('     a      ,        b    ')
      expect(expected).to.deep.equal(actual)
    })
  })
  describe('getRequest', () => {
    // TODO: implement
  })
})
