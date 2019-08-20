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
      producers: 'Gary Kurtz, Rick McCallum',
      date: '1980-05-17'
    },
    {
      title: 'Revenge of the Sith',
      director: 'George Lucas',
      producers: 'Rick McCallum',
      date: '2005-05-19'
    },
    {
      title: 'Return of the Jedi',
      director: 'Richard Marquand',
      producers: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
      date: '1983-05-25'
    },
    {
      title: 'A New Hope',
      director: 'George Lucas',
      producers: 'Gary Kurtz, Rick McCallum',
      date: '1977-05-25'
    },
    {
      title: 'The Force Awakens',
      director: 'J. J. Abrams',
      producers: 'Kathleen Kennedy, J. J. Abrams, Bryan Burk',
      date: '2015-12-11'
    }
  ]
}

module.exports = swapiResourcesFormatted
