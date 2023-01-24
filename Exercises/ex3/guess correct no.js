let   correct,no = 43; 
do{
 correct = prompt('enter the no ')
correct= Number.parseInt(correct)
}while(correct != no)
console.log('you guess correct no '+correct)