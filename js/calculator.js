const CALC_BUTTONS = ['CE', 'C', '<', '/', '7', '8', '9', 
                      'x', '4', '5', '6', '-', '1', '2', 
                      '3', '+', '+/-', '0', '.', '='];

function initializeCalc() {
  const buttons = document.getElementById('calc-buttons');
  for (button of CALC_BUTTONS) {
    const calcButton = document.createElement('button');
    calcButton.setAttribute('id', `button${CALC_BUTTONS.indexOf(button)}`);
    calcButton.setAttribute('class', 'calc-button');
    calcButton.setAttribute('value', button);
    calcButton.textContent = button;
    buttons.appendChild(calcButton);
  }
}

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

window.onload = () => {
  initializeCalc();
};