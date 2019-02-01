var a=Number(prompt("enter number")),b=Number(prompt("enter number"));
console.log("1.add 2.sub 3.div 4. mult 5.exit");
var choice=Number(prompt("enter choice"));
var c="";
do{
    if (choice==1)
        {
            c=a+b;
            console.log(c);
            break;
        }

    else if (choice==2)
        {
            c=a-b;
            console.log(c);
            break;
        }
    else if (choice==3)
    {
        c=a/b;
        console.log(c);
        break;
    }
    else if (choice==4)
    {
        c=a*b;
        console.log(c);
        break;
    }
    else break;
    
    }while(1<=choice<=5)
