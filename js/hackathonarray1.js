var arr=[1,2,5,7];
var length=arr.length;
var sum=0;
for (var i=0;i<length;i++)
{
    sum=sum+arr[i];
}
var diff=sum+1;
var number=0;

for (var j=0;j<length;j++)
{
    if (((arr[j]*length)-sum)<diff&&((arr[j]*length)-sum)>0)
    {
        diff=(arr[j]*length)-sum;
        number=arr[j];
    }
}
console.log(number);