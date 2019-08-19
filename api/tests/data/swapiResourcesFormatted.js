/*
  DO NOT MODIFY, USED FOR TESTING
  data for https://swapi.co/api/people/1
*/
const swapiResourcesFormatted = {
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
  species: [
    {
      name: 'Human',
      averageLifespan: '120',
      classification: 'mammal',
      language: 'Galactic Basic'
    }
  ],
  films: [
    {
      title: 'The Empire Strikes Back',
      director: 'Irvin Kershner',
      producers: [
        'GaryKurtz',
        'RickMcCallum'
      ],
      date: '1980-05-17'
    },
    {
      title: 'Revenge of the Sith',
      director: 'George Lucas',
      producers: [
        'RickMcCallum'
      ],
      date: '2005-05-19'
    },
    {
      title: 'Return of the Jedi',
      director: 'Richard Marquand',
      producers: [
        'HowardG.Kazanjian',
        'GeorgeLucas',
        'RickMcCallum'
      ],
      date: '1983-05-25'
    },
    {
      title: 'A New Hope',
      director: 'George Lucas',
      producers: [
        'GaryKurtz',
        'RickMcCallum'
      ],
      date: '1977-05-25'
    },
    {
      title: 'The Force Awakens',
      director: 'J. J. Abrams',
      producers: [
        'KathleenKennedy',
        'J.J.Abrams',
        'BryanBurk'
      ],
      date: '2015-12-11'
    }
  ]
}

module.exports = swapiResourcesFormatted
