(function () {
    'use strict';

    module.exports = function (skn, parser) {
        var i;

        skn.indicesCount = parser.int32();
        skn.verticesCount = parser.int32();

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
