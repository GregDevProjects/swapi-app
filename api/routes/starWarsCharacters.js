const Joi = require('joi')
const express = require('express')
const router = express.Router()
const { requestSchema, responseSchema } = require('../schemas/starWarsCharacters')
const { requestSwapiResources, formatStarWarsCharacter } = require('../helpers')

/* GET return resources associated with a person from https://swapi.co/api/ */
router.get('/:id', (req, res, next) => {
  const personId = handleRequest(req.params, res)
  if (!personId) {
    return
  }
  handleResponse(personId, res)
})

/**
 * validates the incoming request issued to the /star-wars-characters/:id endpoint
 * @param {object} request the request
 * @param {object} res ServerResponse object provided by express
 * @returns {number | boolean} the requested starWarsCharacter id OR false if the request fails validation
 */
const handleRequest = (request, res) => Joi.validate(request, requestSchema, (err, value) => {
  if (err) {
    // send a 422 error response if validation fails
    res.status(422).json({
      status: 'error',
      message: err.message
    })

    return false
  }
  return value.id
})

/**
 * Attempts to issue a response from the server containing a starWarsCharacter after fetching the required data from https://swapi.co/
 * @param {number} personId id of the person from https://swapi.co/api/people/{id}
 * @param {object} res ServerResponse object provided by express
 */
const handleResponse = (personId, res) => {
  requestSwapiResources(personId)
    .then(swapiResources => Joi.validate(formatStarWarsCharacter(swapiResources), responseSchema, (err, value) => {
      if (err) {
        console.error('swapi.co returned an unexpected data structure', err)
        res.status(500).json('')
        return
      }
      res.json(value)
    }))
    .catch((err) => {
      if (err.statusCode && err.statusCode !== 404) {
        console.error('error fetching from https://swapi.co', err)
      }
      // forward the error code from swapi if available
      res.status(err.statusCode ? err.statusCode : 500).json('')
    })
}

module.exports = router
