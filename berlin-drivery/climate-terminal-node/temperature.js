const request = require('request')

const baseUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/'

const historicUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/'

const dates = {
  historical: [
    { start: 1920, end: 1939 },
    { start: 1940, end: 1959 },
    { start: 1960, end: 1979 },
    { start: 1980, end: 1999 }
  ],
  future: [
    { start: 2020, end: 2039 },
    { start: 2040, end: 2059 },
    { start: 2060, end: 2079 },
    { start: 2080, end: 2099 }
  ]
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function fetchUrl (url) {
  return new Promise(function (resolve, reject) {
    request(url, function (err, response, body) {
      if (err) return reject(err)
      try {
        resolve(JSON.parse(body))
      } catch (e) {
        reject(e)
      }
    })
  })
}

function getUrls (type, country) {
  return dates[type].map(x => baseUrl + x.start + '/' + x.end + '/' + country + '.json')
}

const monthly = function (req, res) {
  const urls = getUrls('historical', req.params.country)
  Promise.all(
    urls.map(url => {
      return fetchUrl(url)
    }))
    .then(r => { return r.reduce((acc, val) => acc.concat(val), []) })
    .then(result => {
      const data = []
      for (let i = 0; i < result.length; i++) {
        data.push(result[i].monthVals[monthNames.indexOf(req.query.month)])
      }
      res.status(200).send({
        data: data,
        message: `Historical monthly data for ${req.params.country} in ${req.query.month} in range ${dates.historical[0].start}-${dates.historical[dates.historical.length - 1].end}`
      })
    })
}

const yearly = function (req, res) {
  fetchUrl(historicUrl + req.params.country + '.json')
    .then(r => {
      res.status(200).send({
        data: r,
        message: `Historical yearly data for ${req.params.country} in ${req.query.month} in range ${dates.historical[0].start}-${dates.historical[dates.historical.length - 1].end}`
      })
    })
}

/**
 *
 * @param {*} req Takes a country iso3 as req.params.country and a month name as req.query.month (month should be part of monthNames)
 * @param {*} res send an array of celsius data for a certain period.
 * If req.query.month is passed, response object will have a 'data' key with an array of temperature for this particular month.
 * else, esponse object will have a 'year' with an int and a 'data' key with the temperature for this year.
 */

const historical = function (req, res) {
  if (req.query.month) {
    monthly(req, res)
  } else {
    yearly(req, res)
  }
}

module.exports = {
  historical: historical
}
