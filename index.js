'use strict';

const Crypto = require('crypto');

module.exports = {
    sha1(text) {
        return Crypto.createHash('sha1').digest('hex');
    }
}
