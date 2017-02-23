'use strict'

const numToChar = require('./num-to-char')
const charToNum = require('./char-to-num')

const caesarDec = (value, shift) => {
  return numToChar(charToNum(value) - (shift % 26))
}

const decrypt = (value, shift) => {
  const letters = value.split('')
  return letters.map(letter => {
    return caesarDec(letter, shift)
  }).join('')
}

module.exports = decrypt
