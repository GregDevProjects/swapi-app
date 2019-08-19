const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')

const starWarsCharactersRouter = require('./routes/starWarsCharacters')

const app = express()
app.use(logger('dev'))
app.use('/star-wars-characters', starWarsCharactersRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json('')
})

module.exports = app
