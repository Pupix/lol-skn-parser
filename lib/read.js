(function () {
    'use strict';

    // Vars
    var XP = require('expandjs');

    /*********************************************************************/

    module.exports = function (data) {
        var readable = {};

        readable.materials = data.materials || [];
        readable.vertices = data.vertices;
        readable.indices = data.indices;

        XP.forEach(readable.materials, function (material) {
            material.name = material.name.slice(0, material.name.indexOf('\u0000'));
        });
        return readable;
    };

}());
