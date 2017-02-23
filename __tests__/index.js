'use strict'

import test from 'ava'
import {encrypt, decrypt} from '../'

test('encrypt one single letter', t => {
  t.is(encrypt('a', 3), 'd')
})

test('decrypt one single letter', t => {
  t.is(decrypt('d', 3), 'a')
})

test('encrypt a word', t => {
  t.is(encrypt('not-my-password', 1), 'opu.nz.qbttxpse')
})

test('decrypt a word', t => {
  t.is(decrypt('opu.nz.qbttxpse', 1), 'not-my-password')
})

test('encrypt numbers', t => {
  t.is(encrypt('1234', 10), ';<=>')
})

test('decrypt numbers', t => {
  t.is(decrypt(';<=>', 10), '1234')
})
