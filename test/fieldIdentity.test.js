const expect = require('chai').expect;
const fieldIdentity = require('../src/identity.js')

// 测试case
const cases = [
  {
    name: '18位身份证号',
    in: '110123456789012345',
    out: '110***********2345'
  }
]

describe('fieldIdentity', function () {

  cases.forEach(item => {
    it(item.name, function () {
      expect(fieldIdentity(item.in)).to.equal(item.out)
    })
  })

})
