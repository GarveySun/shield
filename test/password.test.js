const expect = require('chai').expect;
const shield= require('../index.js')

// 测试case
const cases = [
  {
    name: '密码',
    in: 'abcd1234',
    out: '********'
  }
]

describe('password', function () {

  cases.forEach(item => {
    it(item.name, function () {
      expect(shield.password(item.in)).to.equal(item.out)
    })
  })

})
