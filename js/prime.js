var a= [4,7,3,8,9,4,6,5,19]
for (var i=0;i<9;i++)
{
    var count =0;
    for (var j=2;j<a[i];j++)
    {
        if (a[i]%j==0)
        count=count+1;
    }
    if (count ==0)
    console.log(a[i]);
}