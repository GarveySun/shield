const expect = require('chai').expect;
const shield= require('../index.js')

// 测试case
const cases = [
  {
    name: '16位银行账号',
    in: '6200123412345678',
    out: '6200********5678'
  },
  {
    name: 'undefined',
    in: undefined,
    error:'不能为空'
  }
]

describe('email', function () {

  cases.forEach(item => {
    it(item.name, function () {
      if(item.error){
        expect(()=> shield.bankAccount(item.in)).to.throw(item.error)
      }else{
        expect(shield.bankAccount(item.in)).to.equal(item.out)
      }

    })
  })

})
