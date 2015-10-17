(function () {
    'use strict';

    var v1 = require('./v1');

    module.exports = function (skn, parser) {
        v1(skn, parser);
    };

}());
