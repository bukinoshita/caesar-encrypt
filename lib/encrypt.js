'use strict'

const numToChar = require('./num-to-char')
const charToNum = require('./char-to-num')

const caesar = (value, shift) => {
  return numToChar(charToNum(value) + (shift % 26))
}

const encrypt = (value, shift) => {
  const letters = value.split('')

  return letters.map(letter => {
    return caesar(letter, shift)
  }).join('')
}

module.exports = encrypt
