const getMask = require('./lib/getMask.js')

module.exports = function(mail){

  let at_index = mail.indexOf('@')

  let account = mail.substr(0,at_index)
  let host = mail.substr(at_index)

  return account.substr(0,1) + getMask(account.length-2) + account.substr(-1) + host

}
