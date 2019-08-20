const { getRequest, commaStringToArray } = require('./utils')
const PERSON_URL = 'https://swapi.co/api/people'

/**
 * Preforms a GET request and Returns a promise that resolves to an object of resources associated with a person from https://swapi.co
 * @param  {string} personId id of the person resource
 * @returns  {object} collection Resources from the get response
 * @returns  {object} collection.person People resource fetched from personRequestUrl
 * @returns  {object} collection.homeworld World where the person was born
 * @returns  {Array<object>} collection.species Species the person belongs to
 * @returns  {Array<object>} collection.films Films the person appeared in
 */
const requestSwapiResources = async personId => {
  const person = await getRequest(personRequestUrl(personId))
  const others = await Promise.all(
    [
      getRequest(person.homeworld),
      ...person.species.map(getRequest),
      ...person.films.map(getRequest)
    ]
  )

  return {
    person,
    homeworld: others[0],
    species: others.slice(1, 1 + person.species.length),
    films: others.slice(1 + person.species.length)
  }
}

/**
 * Returns the request url for the passed person from https://swapi.co
 * @param  {number} id Id of the person to get
 * @returns {string} Url of the get request
 */
const personRequestUrl = (id) => {
  return `${PERSON_URL}/${id}`
}

/**
 * Formats the resources associated with a person from https://swapi.co to conform with a starWarsCharacter
 * See schemas/starWardsCharacters for specifics on the object
 * @param {object} swapiResources collection of resources from https://swapi.co
 * @returns  a starWarsCharacter
 */
const formatStarWarsCharacter = swapiResources => {
  const { person, homeworld, species, films } = swapiResources
  const formatFilm = (film) => {
    return {
      title: film.title,
      director: film.director,
      producers: film.producer,
      date: film.release_date
    }
  }
  const formatSpecies = (species) => {
    return {
      name: species.name,
      averageLifespan: species.average_lifespan,
      classification: species.classification,
      language: species.language
    }
  }

  return {
    name: person.name,
    height: person.height,
    mass: person.mass,
    hairColor: person.hair_color,
    skinColor: person.skin_color,
    gender: person.gender,
    birthYear: person.birth_year,
    homePlanet: {
      title: homeworld.name,
      terrain: homeworld.terrain,
      population: homeworld.population
    },
    species: [
      ...species.map(formatSpecies)
    ],
    films: [
      ...films.map(formatFilm)
    ]
  }
}

module.exports = {
  requestSwapiResources,
  formatStarWarsCharacter,
  personRequestUrl,
  PERSON_URL
}
