#include "grains.h"
#include <math.h>

uint64_t square(uint8_t index) {
    return pow(2, index-1);
}
uint64_t total(void){
    int total = 1;
    for(int i = 2; i<=64; i++){
        total = total + square(i);
    }
    return total;
}