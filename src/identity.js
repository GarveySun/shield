const getMask = require('./lib/getMask.js')

module.exports = function(id){

  id = String(id)
  let length = id.length
  return id.substr(0, 3) + getMask(length-7) + id.substr(length - 4, 4)

}
