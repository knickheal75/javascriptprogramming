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
function getSecondLargest(nums) {
    var large = nums[0];
    var second=0;
    for (var i = 0; i < nums.length;i++) {
        if (nums[i] >= large) {
            second = large;
            large = nums[i];
        }
        else
            second = nums[i];
    }
    return second;
}





