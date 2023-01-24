
//Basic Calculator
//function
function calculator(input1 ,input2 ,check){
  if(check =='+'){
    console.log(input1 + input2)
  }
  if(check =='-'){
    console.log(input1 - input2)
  }
  if(check =='*'){
    console.log(input1 * input2)
  }
  if(check =='/'){
    console.log(input1 / input2)
  }
}
//logic
let controle ;
do{
console.log('input the values')
in1 = prompt("type 1st value")
in1 = Number.parseInt(in1)
in2 = prompt("type 2nd value")
in2 = Number.parseInt(in2)
test = prompt('type + for add - for subtracr * for multiply / for divide')
calculator(in1 ,in2 ,test)
//controle
  controle = prompt('if you want to exit type off or else type any key')
}while(controle != 'off')