'use strict';

const encrypt = require('encrypt');

module.exports = {
    sha1(text) {
        return encrypt.sha1(text);
    }
}
