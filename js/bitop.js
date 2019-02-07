var a=23;
var c= (a&0xAAAAAAAA)>>1;
var b= (a&0x55555555)<<1;
var d=b|c;
console.log(d);