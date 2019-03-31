a=[1,3,4,5,3,7,7,3];
for (var i=0;i<a.length;i++)
{
    for (var j=i+1;j<a.length;j++)
    {
        if (a[i]==a[j])
        {
            a.splice(j,1);
        }
    
    }
}
console.log(a)

// can also use the delete array operator 