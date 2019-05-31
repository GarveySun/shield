const getMask = require('./lib/getMask.js')

module.exports = function(account){

  if (account===undefined){throw new Error('银行账号不能为空')}

  return account.substr(0,4) + getMask(account.length-8) + account.substr(-4)

}
