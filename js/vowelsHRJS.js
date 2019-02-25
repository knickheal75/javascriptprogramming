'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var x = "aeiou";
    for (var i = 0; i < s.length; i++)
    {
        for (var j = 0; j < x.length; j++)
        {
            if (s.charAt(i) == x.charAt(j))
                console.log(s.charAt(i));
        }
    }
    for (var i = 0; i < s.length; i++)
    {
        var c = 0;
        for (var j = 0; j < x.length; j++)
        {
           
            if (s.charAt(i) == x.charAt(j))
            {
               
                c = 1;

            } 
            
        } if (c != 1) console.log(s.charAt(i));
    }
    
}


