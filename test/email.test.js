const expect = require('chai').expect;
const shield= require('../index.js')

// 测试case
const cases = [
  {
    name: '邮箱',
    in: 'abcd1234@gmail.com',
    out: 'a******4@gmail.com'
  }
]

describe('email', function () {

  cases.forEach(item => {
    it(item.name, function () {
      expect(shield.email(item.in)).to.equal(item.out)
    })
  })

})
