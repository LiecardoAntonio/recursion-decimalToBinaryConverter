const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');

let animationData = [
  //object to represent the first frame of your animation. Your object should have two properties or keys: inputVal, and addElDelay.
  {
    //inputVal will represent the value of the input each time your recursive function runs. And addElDelay will be the delay between adding DOM elements to the page.
    inputVal: 5,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 5000,
    removeElDelay: 10000
  }
]; // array of objects to store data for each frame of the animation.

// the function below illustrate how recursion works
const countDownAndUp = (number) => {
  console.log(number);

  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
    console.log(number);
  }
};
countDownAndUp(3);  //Now you should see a countdown from 3 to 0, followed by Reached base case, and a count from 1 to 3. This is because, after the recursive loop is finished, the function will continue to execute the code after the recursive call. This is why you see Reached base case before the count from 1 to 3.

//function to convert decimal to binary
function decimalToBinary(input) {
  // let inputs = [];
  // let quotients = [];
  // let remainders = [];

  // // check if the input is 0
  // if (input === 0) {
  //   result.innerText = '0';
  //   return;
  // }

  // while(input>0) { //we will divide until we reach quotient (result of dividing 2 numbers is 0)
  //   const quotient = Math.floor(input / 2);
  //   const remainder = input % 2;
    
  //   inputs.push(input);
  //   quotients.push(quotient);
  //   remainders.push(remainder);

  //   input = quotient;
  // }

  //improvements 1
  // let binary = ''; //it's not necessary to keep track of the inputs and quotients.

  // if(input === 0) {
  //   binary = "0"; //Finally, you need to handle cases where input is 0. Rather than update the DOM and return early like you did before, you can update the binary string and let the rest of the code in the function run.
  // }

  // while(input>0) {
  //   console.log(binary);
  //   binary = (input % 2) + binary; // it would be easier to use string concatenation within the loop to build the binary string from right to left, so you won't need to reverse it later. Then, use the addition operator to add the current value of binary to the end of the equation input % 2. This is what will build the binary string from right to left.
  //   input = Math.floor(input/2);
  // }
  // result.innerText = binary;

  //improvements 2 (using recursive)
  // if(input == 0) {
  //   return '0';
  // } else if(input === 1) {
  //   //if you convert 0 into binary, 0 is displayed on the page. But now when you convert other numbers greater than 0, your binary number starts with a leading 0. For example, if you convert 1, the result is 01. But if you think about it, 0 and 1 in base-10 always convert to 0 and 1 in base-2, respectively. So you can add another base case to handle when input is 1.
  //   return '1';
  // } else {
  //   return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  // }
  // upgrade below:
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
}

// showing the animation of how the recursive function works on converting the decimal to binary
function showAnimation(){
  // setTimeout(() => {
  //   console.log("free");
  // }, 500)
  // setTimeout(() => {
  //   console.log("Code");
  // }, 1000);
  // setTimeout(() => {
  //   console.log("Camp");
  // }, 1500)

  //improvement
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay); //create the element for the animation

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay); //show the message

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay); //remove the message

    setTimeout(() => {
      result.textContent = decimalToBinary(5);
    }, 20000); //show the decimal to binary result of 5;
  })
}

//before improvements
// // try input 6 and click the convert button
// // the result will be:
// /*
//   Inputs:  [ 6, 3, 1 ]
//   Quotients:  [ 3, 1, 0 ]
//   Remainders:  [ 0, 1, 1 ]
// */
// //Notice that the remainders array is the binary representation of the number 6, but in reverse order.
// console.log("Inputs: ", inputs);
// console.log("Quotients: ", quotients);
// console.log("Remainders: ", remainders);
// result.innerText = remainders.reverse().join(''); //the binary result

function checkUserInput() {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt<0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  //if the input = 5, create animation on how the recursive function works.
  if(inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = ''; //clear the input field
};

convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if(e.key==="Enter"){ //check if enter key is pressed
    
  }
});