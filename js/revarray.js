var a=[1,2,3,8,7];
var b;

for (var i=0;i<a.length/2;i++)
{
    b=a[i];
    a[i]=a[a.length-i-1];
    a[a.length-i-1]=b;
}
console.log(a);
