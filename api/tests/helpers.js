const assert = require('assert')
const { personRequestUrl, PERSON_URL, formatStarWarsCharacter, requestSwapiResources } = require('../helpers')
const swapiResources = require('./data/swapiResources')
const swapiResourcesFormatted = require('./data/swapiResourcesFormatted')
const { expect } = require('chai')

describe('helpers', () => {
  it('personRequestUrl returns the correct url', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const url = personRequestUrl(randomNumber)
    const expected = `${PERSON_URL}/${randomNumber}`
    assert.strictEqual(url, expected)
  })
  it('formatStarWarsCharacter formats the swapi resources correctly', () => {
    const output = formatStarWarsCharacter(swapiResources)
    expect(output).to.deep.equal(swapiResourcesFormatted)
  })
  it('requestSwapiResources returns Promise that resolves to the correct object', (done) => {
    requestSwapiResources(1).then(output => {
      expect(output).to.deep.equal(swapiResources)
      done()
    })
  })
})
