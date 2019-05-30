const expect = require('chai').expect;
const getMask = require('../src/lib/getMask.js')

// 测试case
const cases = [
  {
    name: '数字0',
    in: 0,
    out: ''
  },
  {
    name: '正数',
    in: 4,
    out: '****'
  },
  {
    name: '小数',
    in: 3.4,
    out: '***'
  },
  {
    name: '负数',
    in: -4,
    out: ''
  },
  {
    name: '可转数字字符串',
    in: '4',
    out: '****'
  },
  {
    name: 'undefined',
    in: undefined,
    out: ''
  },
  {
    name: 'null',
    in: null,
    out: ''
  }
]

describe('getMask', function () {

  cases.forEach(item => {
    it(item.name, function () {
      expect(getMask(item.in)).to.equal(item.out)
    })
  })

})
