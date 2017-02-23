# caesar
> One of the simplest forms of encryption

[![Codeship Status for bukinoshita/caesar](https://app.codeship.com/projects/0165eea0-dc14-0134-a8b9-721cd3f7afb3/status?br nch=master)](https://app.codeship.com/projects/204204)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/caesar.svg)](https://www.npmjs.com/package/caesar)
[![license](https://img.shields.io/github/license/bukinoshita/caesar.svg)](https://raw.githubusercontent.com/bukinoshita/caesar/master/LICENSE)

## Install
```
$ npm install --save caesar-encrypt
```

## Usage
```js
import { encrypt, decrypt } from 'caesar-encrypt'

encrypt('not-my-password', 1)
// => opu.nz.qbttxpse

decrypt('opu.nz.qbttxpse', 1)
// => not-my-password
```

## API
### caesar

### encrypt(input, shift)

#### input
Type: string<br/>
Required

#### shift
Type: number<br/>
Required

shift should be a number between 1-26

## Understand Caesar Cipher
> The Caesar cipher, also known as a shift cipher, is one of the simplest forms of encryption. It is a substitution cipher where each letter in the original message (called the plaintext) is replaced with a letter corresponding to a certain number of letters up or down in the alphabet. [Learn more](https://learncryptography.com/classical-encryption/caesar-cipher)

## Related
- [save-me](https://github.com/bukinoshita/save-me) — :lock: Save anything

## License
[MIT](https://github.com/bukinoshita/caesar/blob/master/LICENSE) &copy; Bu Kinoshita
