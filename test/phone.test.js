const expect = require('chai').expect;
const shield= require('../index.js')

// 测试case
const cases = [
  {
    name: '11位手机号',
    in: 13800138000,
    out: '138****8000'
  }
]

describe('phone', function () {

  cases.forEach(item => {
    it(item.name, function () {
      expect(shield.phone(item.in)).to.equal(item.out)
    })
  })

})

