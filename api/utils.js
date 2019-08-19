const requestPromise = require('request-promise')

/**
 * Preforms a GET request and returns a promise that resolves to the response of the passed url
 * Expects a JSON response from the url
 * @param  {string} url where to send the get request
 * @returns {Promise} response from the url
 */
const getRequest = (url) => {
  if (!url) {
    return
  }
  const options = {
    uri: url,
    json: true
  }

  return requestPromise(options)
}

/**
 * Returns array generated from passed comma separated string
 * Strips any whitespace
 * @param {string} commaString
 * @returns {Array} array of the comma separated values
 */
const commaStringToArray = (commaString) => {
  return commaString.replace(/\s/g, '').split(',')
}

module.exports = {
  getRequest,
  commaStringToArray
}
