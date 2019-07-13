test.js: test.cpp
	emcc -O3 \
	-I./api \
	-s WASM=1 \
	-s EXTRA_EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap']" \
	-s MODULARIZE=1 \
	-s EXPORT_NAME="'TestModule'" \
	-o bin/test.js \
	test.cpp

bindtest.js: bindtest.cpp
	emcc --bind -O3 \
	-s WASM=1 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s EXTRA_EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap']" \
	-s MODULARIZE=1 \
	-s EXPORT_NAME="'BindTestModule'" \
	-o bin/bindtest.js \
	bindtest.cpp
