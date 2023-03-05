console.log('Hello, world');

function addNumbers(num1, num2) {
  return;
}

function subtractNumbers(num1, num2) {
  return;
}

function multiplyNumbers(num1, num2) {
  return;
}

function divideNumbers(num1, num2) {
  return;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return addNumbers(num1, num2);
    case '-':
      return subtractNumbers(num1, num2);
    case '*':
      return multiplyNumbers(num1, num2);
    case '/':
      return divideNumbers(num1, num2);
    default:
      return 'OOPS';
  }
}