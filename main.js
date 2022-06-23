
let result;
let operand;

function calc() {
       let num1 = prompt("Enter first number");
       let num2 = prompt("Enter second number");
       operand = prompt("select an operation + - * /" )
       num1 = num1.trim()
       num2 = num2.trim()
       if (!isNaN(num1) && num1 != '' && num1 != ' '  && num1 != null )  {
              if (!isNaN(num2) && num2 != '' && num2 != ' ' && num2 != null)  {
                     
                     mathOperation(num1, num2)

              } else {
                     confirm('first number or second number is not a valid number');
              }
       } else {
              confirm('first number or second number is not a valid number');
       }
}


function mathOperation(val1,val2) {
  if (operand === '+') {
       result = Number(val1) + Number(val2)
       confirm(`${val1} + ${val2} = ${result}`)

  } else if (operand === '-') {
       result = Number(val1) - Number(val2)
       confirm(`${val1} - ${val2} = ${result}`)

  } else if (operand === '*') {
       result = Number(val1) * Number(val2)
       confirm(`${val1} * ${val2} = ${result}`)
  
  } else if (operand === '/') {
       result = Number(val1) / Number(val2)
       confirm(`${val1} / ${val2} = ${result}`)
  } else {
       confirm (' you have selected an invalid operator. please restart')
  }
}

calc()
