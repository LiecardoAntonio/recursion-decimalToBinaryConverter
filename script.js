const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

//function to convert decimal to binary
function decimalToBinary(input) {
  let inputs = [];
  let quotients = [];
  let remainders = [];

  // check if the input is 0
  if (input === 0) {
    result.innerText = '0';
    return;
  }

  while(input>0) { //we will divide until we reach quotient (result of dividing 2 numbers is 0)
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;
    
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);

    input = quotient;
  }
}

// try input 6 and click the convert button
// the result will be:
/*
  Inputs:  [ 6, 3, 1 ]
  Quotients:  [ 3, 1, 0 ]
  Remainders:  [ 0, 1, 1 ]
*/
//Notice that the remainders array is the binary representation of the number 6, but in reverse order.
console.log("Inputs: ", inputs);
console.log("Quotients: ", quotients);
console.log("Remainders: ", remainders);
result.innerText = remainders.reverse().join(''); //the binary result

function checkUserInput() {
  if (!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value)<0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = ''; //clear the input field
};

convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if(e.key==="Enter"){ //check if enter key is pressed
    
  }
});