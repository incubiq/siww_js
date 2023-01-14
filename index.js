/*!
 * siww
 * Copyright(c) 2022-2022 IncubIQ
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 */

const {siww} = require('./libs/siww');

/**
 * Module exports.
 */

const _siww=new siww();            // sign-in with wallet (generic)

module.exports = _siww;