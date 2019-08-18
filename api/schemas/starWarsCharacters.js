const Joi = require('joi')

const requestSchema = Joi.object().keys({
  id: Joi.number().min(1).integer().required()
})

const responseSchema = Joi.object().keys({
  name: Joi.string().required(),
  height: Joi.number().required(),
  mass: Joi.number().required(),
  hairColor: Joi.string().required(),
  skinColor: Joi.string().required(),
  gender: Joi.string().required(),
  birthYear: Joi.string().required(),
  homePlanet: Joi.object().keys({
    title: Joi.string().required(),
    terrain: Joi.string().required(),
    population: Joi.number().required()
  }).required(),
  species: Joi.object().keys({
    name: Joi.string().required(),
    averageLifespan: Joi.number().required(),
    classification: Joi.string().required(),
    language: Joi.string().required()
  }).required(),
  films: Joi.array().items(Joi.object().keys({
    title: Joi.string().required(),
    director: Joi.string().required(),
    producers: Joi.array().items(Joi.string().required()),
    date: Joi.date().required()
  })).required()
})

module.exports = {
  requestSchema: requestSchema,
  responseSchema: responseSchema
}
