import test from '../../wasm/bin/test.js';
import testModule from '../../wasm/bin/test.wasm';

import * as mapping from 'mapping';

console.log(mapping.module2);
console.log(mapping.BearingLayer);

console.info('webassembly.js LOADED!');

const module = test({
    locateFile(path) {
        if(path.endsWith('.wasm')) {
            return testModule;
        }
        return path;
    }
});

module.onRuntimeInitialized = () => {
    console.log(module._process());
};

mapping.module2.onRuntimeInitialized = () => {
    console.log(mapping.module2.getBearing(20, 60, 21, 60));
};
