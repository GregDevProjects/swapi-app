const Joi = require('joi')
const express = require('express')
const router = express.Router()
const requestSchema = require('../schemas/starWarsCharacters').requestSchema
const responseSchema = require('../schemas/starWarsCharacters').responseSchema

const dummyStarWarsCharacter = require('../dummy_data/starWarsCharacters')
/* GET star wars character by id, request is forwarded to https://swapi.co/api/people/{peopleId} */
router.get('/:id', function (req, res, next) {
  const data = req.params

  Joi.validate(data, requestSchema, (err, value) => {
    if (err) {
      // send a 422 error response if validation fails
      res.status(422).json({
        status: 'error',
        message: 'the request was not formed correctly, please use star-wars-characters/{integer}',
        data: data
      })
      return
    }
    Joi.validate(dummyStarWarsCharacter, responseSchema, (err, value) => {
      if (err) {
        res.status(500).json({
          status: 'error',
          message: 'got an unexpected response from swapi.co',
          data: dummyStarWarsCharacter
        })
        return
      }
      res.json(value)
    })
  })
})

module.exports = router
