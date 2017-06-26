# caesar-encrypt [![Build Status](https://travis-ci.org/bukinoshita/caesar.svg?branch=master)](https://travis-ci.org/bukinoshita/caesar)
> One of the simplest forms of encryption


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
### caesarEncrypt

### .encrypt(input, shift)

#### input
Type: `string`<br/>
Required

#### shift
Type: `number`<br/>
Required

shift should be a number between 1-26


### .decrypt(input, shift)

#### input
Type: `string`<br/>
Required

#### shift
Type: `number`<br/>
Required

shift should be a number between 1-26

## Understand Caesar Cipher
> The Caesar cipher, also known as a shift cipher, is one of the simplest forms of encryption. It is a substitution cipher where each letter in the original message (called the plaintext) is replaced with a letter corresponding to a certain number of letters up or down in the alphabet. [Learn more](https://learncryptography.com/classical-encryption/caesar-cipher)


## Related
- [save-me](https://github.com/bukinoshita/save-me) — :lock: Save anything


## License
MIT © [Bu Kinoshita](https://bukinoshita.io)
