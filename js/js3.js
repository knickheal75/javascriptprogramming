void fun( n)
{
  	if (n == 0)    
		return;  
	console.log(n%2);  
	fun(n/2);}
console.log(fun(25))
