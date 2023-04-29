function Factorial(num) {
 if(num > 0 ) return (num === 1 ? 1 : num * Factorial(num - 1));

 return 0;
}

console.log(Factorial(0)) // returns the value 0
console.log(Factorial(1)) // returns the value 1
console.log(Factorial(8)) // returns the value 40320
