
const starWarsCharacters = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hairColor: 'blond',
  skinColor: 'fair',
  gender: 'male',
  birthYear: '19BBY',
  homePlanet: {
    title: 'Tatooine',
    terrain: 'desert',
    population: '200000'
  },
  species: {
    name: 'Human',
    averageLifespan: '120',
    classification: 'mammal',
    language: 'Galactic Basic'
  },
  films: [
    {
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producers: ['Gary Kurtz', 'Rick McCallum'],
      date: '1980-05-17'
    }
  ]
}

module.exports = starWarsCharacters
