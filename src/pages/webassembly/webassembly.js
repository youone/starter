import test from '../../wasm/bin/test.js';
import testModule from '../../wasm/bin/test.wasm';

console.info('webassembly.js LOADED!');

const module = test({
    locateFile(path) {
        if(path.endsWith('.wasm')) {
            return testModule;
        }
        return path;
    }
});

console.log('the module:', module);

module.onRuntimeInitialized = () => {
    console.log(module._process());
};
