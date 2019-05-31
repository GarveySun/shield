const getMask = require('./lib/getMask.js')

module.exports = function(pw){

  return getMask(pw.length)

}
