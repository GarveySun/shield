# garvey-shield
<p>
  <a href="https://www.npmjs.com/package/@garvey/shield"><img src="https://img.shields.io/npm/dm/@garvey/shield.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@garvey/shield"><img src="https://img.shields.io/npm/v/@garvey/shield.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@garvey/shield"><img src="https://img.shields.io/npm/l/@garvey/shield.svg" alt="License"></a>
  </p>

This library shield sensitive data to show.
## use it
run

```
npm i @garvey/shield
```
and write in your file:

```
const shield = require('@garvey/shield')
// or
import shield from '@garvey/shield'
// or
import {name} from '@garvey/shield'
// or
...as you want
```
## methods

### name(name,type?)
##### name:张三丰
##### type:
|Value|Rule|example|
| --- | ---| --- |
|1(default)|last name and asterisk| 张** |
|2|asterisk and first name| *三丰 |
|3|last name and asterisk and first name| 张*丰 |

### phone(phoneNum)
中国三网11位手机号13800138000 → 138****8000
### identity(identityNum)
大陆二代身份证号18位，支持结尾字母
110123456789012345 → 110***********2345
### email(email)
abcd1234@gmail.com → a******4@gmail.com
### password(pw)
abcd1234 → ********
### bankAccount(account)
6200123412345678 → 6200********5678

## need more function?
To [github](https://github.com/GarveySun/shield) and open a issue .

