const expect = require('chai').expect;
const fieldPhone = require('../src/phone.js')

// 测试case
const cases = [
  {
    name: '11位手机号',
    in: 13800138000,
    out: '138****8000'
  }
]

describe('fieldPhone', function () {

  cases.forEach(item => {
    it(item.name, function () {
      expect(fieldPhone(item.in)).to.equal(item.out)
    })
  })

})

