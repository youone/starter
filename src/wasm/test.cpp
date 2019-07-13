#include <stdio.h>
#include <iostream>
#include <cmath>
#include <emscripten/emscripten.h>

using namespace std;

#ifdef __cplusplus
extern "C" {
#endif

double EMSCRIPTEN_KEEPALIVE process(float* data, int size, int nffts) {
    cout << "PROCESSING" << endl;
    return 5.0;
}

int main(int argc, char ** argv) {
}

#ifdef __cplusplus
}
#endif
