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


// .  Average of an array

var array = [1,2,4,3,-15]
var sum = 0;
array.forEach(function(num){
  sum += num;
  avg = sum / array.length;
})
console.log(avg)
