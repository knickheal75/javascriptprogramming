var a=10;var b=20;
var smaller=a;
if (b<a)
smaller=b;
var count=0;

for (var i=1;i<=smaller;i++)
{
    if (a%i==0 && b%i==0)
    count++;

}
console.log(count);