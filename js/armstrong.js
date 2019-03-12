var num = 10;
var num1=num;
var a=[];
var digit;
var number=0;
while (num>0)
{
    digit=num%10;
    a.push(digit);
    num=parseInt(num/10);
}
var power=a.length;

for (var i=0;i<power;i++)
{
    number=number+(a[i]**power);
}

if(num1==number)
console.log("armstrong")
else
console.log("not")
