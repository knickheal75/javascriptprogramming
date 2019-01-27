console.log(add(2,4));
console.log(subtract(5,4));

function add( a, b)
{
   var x;
  x = a^b;

  while(a&b)
  {
    b = ((a&b)<<1);
    a = x;
    x = a^b;
    //b=(a^b);
  }

  return x;
}
function subtract( x,  y) 
{ 
    if (y == 0) 
        return x; 
    return subtract(x ^ y, (~x & y) << 1); 
} 
