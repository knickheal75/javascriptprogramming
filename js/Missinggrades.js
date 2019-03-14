var arr=[4,3,-1,2,-1,8,10]
var count=1;
var arr1=[];
for (var i=0;i<arr.length;i++)
{
    if (arr[i]==-1)
    {
       var average=parseInt((arr[i-1]+arr[i+1])/2);
       arr1.push(average); 

    }

}
for (var j=0;j<arr1.length;j++)
{
    count=count*arr1[j];
}
console.log(count)