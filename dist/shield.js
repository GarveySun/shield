'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getMask = function getMask(num) {
  num = parseInt(num) || 0;
  if (num < 0) num = 0;
  var mask = '';

  while (mask.length < num) {
    mask += '*';
  }

  return mask;
};

var name = function name(_name, type) {
  switch (type) {
    case 2:
      // *+名
      return '*' + _name.substr(1);

    case 3:
      // 姓*名
      return _name.charAt(0) + '*' + _name.substr(2);

    default:
      // 姓+*
      return _name.charAt(0) + getMask(_name.length - 1);
  }
};

var phone = function phone(_phone) {
  _phone = String(_phone);
  return _phone.substr(0, 3) + getMask(_phone.substr(3, 4).length) + _phone.substr(7);
};

var identity = function identity(id) {
  id = String(id);
  var length = id.length;
  return id.substr(0, 3) + getMask(length - 7) + id.substr(length - 4, 4);
};

var email = function email(mail) {
  var at_index = mail.indexOf('@');
  var account = mail.substr(0, at_index);
  var host = mail.substr(at_index);
  return account.substr(0, 1) + getMask(account.length - 2) + account.substr(-1) + host;
};

var password = function password(pw) {
  return getMask(pw.length);
};

var bankAccount = function bankAccount(account) {
  if (account === undefined) {
    throw new Error('银行账号不能为空');
  }

  return account.substr(0, 4) + getMask(account.length - 8) + account.substr(-4);
};

var src = {
  name: name,
  phone: phone,
  identity: identity,
  email: email,
  password: password,
  bankAccount: bankAccount
};
var src_1 = src.name;
var src_2 = src.phone;
var src_3 = src.identity;
var src_4 = src.email;
var src_5 = src.password;
var src_6 = src.bankAccount;

exports.bankAccount = src_6;
exports.default = src;
exports.email = src_4;
exports.identity = src_3;
exports.name = src_1;
exports.password = src_5;
exports.phone = src_2;
