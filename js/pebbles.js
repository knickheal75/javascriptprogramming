var a=4;
var b=a;
b=b<<8;
var c=a;
c=c>>8;
b=b|c;
b=b & 0xFFFF;
console.log(b);

