var createError = require('http-errors')
var express = require('express')
var logger = require('morgan')

var starWarsCharactersRouter = require('./routes/starWarsCharacters')

var app = express()
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
