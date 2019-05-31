const expect = require('chai').expect;
const shield= require('../src/index.js')

// 测试case
const cases = [
  {
    name: '18位身份证号',
    in: '110123456789012345',
    out: '110***********2345'
  }
]

describe('identity', function () {

  cases.forEach(item => {
    it(item.name, function () {
      expect(shield.identity(item.in)).to.equal(item.out)
    })
  })

})
