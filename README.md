# garvey-shield
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
import {shieldName} from '@garvey/shield'
// or 
...as you want
```
## methods

### fieldName(name,type?)
##### name:张三丰
##### type:
|Value|Rule|example|
| --- | ---| --- |
|1(default)|last name and asterisk| 张** |
|2|asterisk and first name| *三丰 |
|3|last name and asterisk and first name| 张*丰 |

### fieldPhone(phoneNum)
中国三网11位手机号13800138000 =》 138****8000
### fieldIdentity(identityNum)
大陆二代身份证号18位，支持结尾字母
110123456789012345 =》110***********2345

