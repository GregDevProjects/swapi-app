/* eslint-disable handle-callback-err */
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const nock = require('nock')

// start server before tests begin
before(done => {
  app.listen(3001, done)
})

// Configure chai
chai.use(chaiHttp)
chai.should()
describe('starWarsCharacters', () => {
  describe('GET /{id}', () => {
    it('should get a single record', (done) => {
      chai.request(app)
        .get('/star-wars-characters/1')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('should return 422 http status if the request is malformed', (done) => {
      chai.request(app)
        .get('/star-wars-characters/1.1')
        .end((err, res) => {
          res.should.have.status(422)
          done()
        })
    })

    it('should return 500 http status if the response from swapi is malformed', (done) => {
      nock('https://swapi.co', { allowUnmocked: true })
        .get('/api/people/1')
        .reply(200, {
          status: 200,
          message: { noop: true }
        })

      chai.request(app)
        .get('/star-wars-characters/1')
        .end((err, res) => {
          res.should.have.status(500)
          done()
        })
    })

    it('should return 404 http status if the resource cannot be found', (done) => {
      chai.request(app)
        .get('/star-wars-characters/999')
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })
})
