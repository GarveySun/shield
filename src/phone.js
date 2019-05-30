const getMask = require('./lib/getMask.js')

module.exports = function(phone){

  phone = String(phone)
  return phone.substr(0, 3) + getMask(phone.substr(3, 4).length) + phone.substr(7)

}
