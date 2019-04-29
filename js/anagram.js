var main = "hello",
  check = "hello";
var as1 = 0,
  as2 = 0;
main.toLowerCase();
check.toLowerCase();

if (main.length == check.length) {
  for (var i = 0; i < main.length; i++) {
    as1 += main.charCodeAt(i);
    as2 += check.charCodeAt(i);
  }
}

if (as1 == as2 && as1 != 0) console.log("anagram");
else console.log("not");
console.log(as1 + "  " + as2);

//   for (var i = 0; i < main.length; i++) {
//     for (var j = 0; j < check.length; j++) {
//       if (check[j] == main[i]) main = main.slice(i, i + 1);
//     }
//   }
// }

// if (main == []) console.log("anagram");
// else console.log("not anagram");
// console.log(main);
