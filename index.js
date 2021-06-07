function removeI(arr) {
    if (arr.indexOf('i')===-1){ // !arr.includes('i') works as the basecase
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));

//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
  while (checkIfNumber(integer) === false){
  if (integer === 1){
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}
}


function checkIfNumber(input){
  if(typeof(input) == "string" || input !== Math.floor(input) || input < 0){
    console.log(`Please enter a whole integer`);
    return true;
  } else {
    return false;
  }
}


console.log(factorial(-1));

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.