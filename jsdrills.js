// JS Drills

// Add

function add (x, y) {
  return x + y;
}
console.log(add(4,6));


// Sum Array

var array = [1,3,5,7,1,-9];
var sum = 0;
array.forEach(function(num) {
  sum += num;
});
console.log(sum)


// Fahrenheit to Celsius

 function fToC (a) {
     return (a - 32) * (5 / 9)
 };
 console.log(fToC(80));


// Average of an array

var array = [1,2,4,3,-15]
var sum = 0;
array.forEach(function(num){
  sum += num;
  avg = sum / array.length;
})
console.log(avg)


// Vowel Count

var vowels = function(string) {
  var check = 0;
  for (var i = 0; i <= string.length; i++) {
    if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
      check += 1
      // return(check)
      }
  } console.log(check);
}
vowels("Check the vowels in a STRING".toLowerCase());


//factorial

function factorial(a) {

    var num = 1;                            //starting num must be 1, else initial condition inaccurate
    for (var i = a; i <= a && i > 1 ; i--)  //iterate down 1 each loop
      num = num * i;                        //multiply by next i (initially 1, subsequent iterations result * i)
    return num;   //return new result, repeat loop, stop at 2 (final loop @1 unnecessary)
}
console.log(factorial(5));


// fibonacci

function fib(a) {

    var n0 = 0, n1 = 1;                     //given seed [0, 1]
    for(var i = 2; i <= a && i > 1; i++) {  // begin iterating by 1 at n2 due to seed
      num = n0 + n1                         //result is addition of two previous n's
      n0 = n1                               // set n(n-2) to n(n-1)
      n1 = num;                             // set n(n-1) to result n, result n of current index, continue looping until i = a
    }
    return num;                              // result n(a)
}
console.log(fib(7));
