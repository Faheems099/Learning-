//Factorial
let factorial = 1, input = prompt('Enter number for Factorial')
input = Number.parseInt(input)
for (let i = 1; i <= input; i++) {
  factorial *= i;
}
console.log('Factorial of '+input +" = "+factorial)