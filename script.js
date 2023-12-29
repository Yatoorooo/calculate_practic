'use sctict';

let myNumber = prompt('Що хочете зробити (add, sub, mult, div)?');
let firstNumber = +prompt('Введить перше число:');
let twoNumber = +prompt('Ведіть друге число:');

if (myNumber == 'add') {
  alert(`${firstNumber} + ${twoNumber} = ${firstNumber + twoNumber} `);
} 
 else if(myNumber == 'sub' ){
    alert(`${firstNumber} - ${twoNumber} = ${firstNumber - twoNumber} `);
} else if(myNumber == 'mult'){
    alert(`${firstNumber} * ${twoNumber} = ${firstNumber * twoNumber}`);
} else if (myNumber == 'div' ){
    alert(`${firstNumber} / ${twoNumber} = ${firstNumber / twoNumber} `);
} else{
    alert('Введіть коректні значення');
}


 
