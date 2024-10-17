const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

//function to convert decimal to binary
function decimalToBinary(input) {
  let inputs = [];
  let quotients = [];
  let remainders = [];

  input = 0;
}

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