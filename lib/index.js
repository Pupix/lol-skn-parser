/*jslint regexp: true, bitwise: true, browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

(function () {
    'use strict';

    var fileParser = require('lol-file-parser'),
        parse = require('./parse'),
        read = require('./read');

    module.exports = class SknParser extends fileParser {
        async _parse(parser) {
            return parse(parser);
        }

        async _read(data) {
            return read(data);
        }
    };

}());
