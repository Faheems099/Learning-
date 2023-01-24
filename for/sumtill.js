// program to print sum of n numbers
let re = 0;
let num = prompt('enter the number');
num = Number.parseInt(num);


for (let i = 0; i < num + 1; i++) {
  re = re + i;
}
console.log('Result :' + re)