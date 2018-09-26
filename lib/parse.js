(function () {
    'use strict';

    // Vars
    var parsers = require('./parsers');

    /*********************************************************************/

    module.exports = function (parser) {
        var skn = {
            header: {},
            vertices: []
        };

        skn.header.magic = parser.int32();
        skn.header.version = parser.uint16();
        skn.header.numObjects = parser.uint16();

        parsers['v' + skn.header.version](skn, parser);
        return skn;
    };

}());
