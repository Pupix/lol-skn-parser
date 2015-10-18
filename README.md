# lol-skn-parser
A parser for .skn files from League of Legends.

## Download
lol-skn-parser is installable via:

- [GitHub](https://github.com/Pupix/lol-skn-parser) `git clone https://github.com/Pupix/lol-skn-parser.git`
- [npm](https://www.npmjs.com/): `npm install lol-skn-parser`

## Usage example

```js
var SknParser = require('lol-skn-parser'),
    skn = new SknParser();
    
    skn.read('Kindred_Base.skn', function (err, data) {
        console.log(data);
        //  {
        //      "materials": [
        //          {
        //              name: "Lamb_MAT"
        //              numIndices": 17508
        //              numVertices: 3656
        //              startIndex: 0
        //              startVertex: 0
        //          }
        //      ],
        //      indices: [2824, 2856, 2825, 2825, 2856, ...],
        //      "vertices: [
        //          {
        //              boneIndices: {...}
        //              normals: {...}
        //              position: {...}
        //              uv: {...}
        //              weight: {...}
        //          }
        //      ]
        //      ...
        //  }
    });

```

## Available methods

**N.B:** All methods act as promises if no callback is passed.

### parse(path, cb)

It will roughly parse a .skn file from the given path.

**Parameters**

1. **path {string}** A path to where the file to parse resides.
2. **[cb] {Function}** A callback called with `(error, parsedData)` as arguments.

### read(path, cb)

It will read a .skn file from the given path, leaving only the relevant data of the 3D model.

**Parameters**

1. **path {string}** A path to where the file to read resides.
2. **[cb] {Function}** A callback called with `(error, readData)` as arguments.

