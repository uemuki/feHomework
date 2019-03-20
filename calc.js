let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');
let operator = document.getElementById('operator');
let equl = document.getElementById('equl');
let result = document.getElementById('result');

equl.addEventListener('click', handleClick);

function handleClick() {
  let res;
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);
  let operate = operator.value;
  
  switch(operate) {
    case 'add':
      res = num1 + num2;
      break;
    case 'subtract':
      res = num1 - num2;
      break;
    case 'multiply':
      res = num1 * num2;
      break;
    case 'divide':
      res = num1 / num2;
      break;
    default:
      res = '请输入有效数字';
      break;
  }
  
  result.innerHTML = res;
}