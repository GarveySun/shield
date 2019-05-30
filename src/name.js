const getMask = require('./lib/getMask.js')

module.exports = function(name,type){

  switch(type){

    case 2:
      // *+名
      return '*' + name.substr(1)

    case 3:
      // 姓*名
      return name.charAt(0) + '*' + name.substr(2)

    default:
      // 姓+*
      return name.charAt(0) + getMask(name.length - 1)
  }

}
