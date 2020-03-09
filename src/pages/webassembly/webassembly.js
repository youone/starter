import test from '../../wasm/bin/test.js';
import testModule from '../../wasm/bin/test.wasm';

import * as mapping from 'mapping';
console.log(mapping);

import geowasm from '../../../../mapping/src/wasm/bin/bindtest.js';
import geowasmWasm from '../../../../mapping/src/wasm/bin/bindtest.wasm';

console.log(mapping.module.getBearing(20, 60, 21, 60));

// console.log(geowasmWasm);

// import 'mapping/dist/mapping.bundle';
// console.log(window.mappinglib);
// console.log(mapping.module2);
// console.log(window.mapping.exp3.getBearing(20, 60, 21, 60));
//
// console.info('webassembly.js LOADED!');
//
const module2 = geowasm({
    locateFile(path) {
        if(path.endsWith('.wasm')) {
            return geowasmWasm;
        }
        return path;
    }
});
//
// module.onRuntimeInitialized = () => {
//     console.log(module._process());
// };
//
module2.onRuntimeInitialized = () => {
    console.log(module2.getBearing(20, 60, 21, 60));
};
