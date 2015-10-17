(function () {
    'use strict';

    var v1 = require('./v1');

    module.exports = function (skn, parser) {
        var i;

        skn.materialsCount = parser.int32();
        skn.materials = [];

        for (i = 0; i < skn.materialsCount; i += 1) {
            skn.materials.push({
                name: parser.string(64),
                startVertex: parser.int32(),
                numVertices: parser.int32(),
                startIndex: parser.int32(),
                numIndices: parser.int32()
            });
        }

        skn.unks = {};
        skn.unks[parser.tell()] = parser.int32();

        skn.indicesCount = parser.int32();
        skn.verticesCount = parser.int32();

        skn.unks[parser.tell()] = parser.uint16(24);

        skn.indices = parser.int16(skn.indicesCount);

        for (i = 0; i < skn.verticesCount; i += 1) {
            skn.vertices.push({
                position: {
                    x: parser.float(),
                    y: parser.float(),
                    z: parser.float()
                },
                boneIndices: {
                    x: parser.byte(),
                    y: parser.byte(),
                    z: parser.byte(),
                    w: parser.byte()
                },
                weight: {
                    x: parser.float(),
                    y: parser.float(),
                    z: parser.float(),
                    w: parser.float()
                },
                normals: {
                    x: parser.float(),
                    y: parser.float(),
                    z: parser.float()
                },
                uv: {
                    u: parser.float(),
                    v: parser.float() //1 - parser.float()
                }
            });
        }
    };

}());
