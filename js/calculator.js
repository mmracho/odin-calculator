const CALC_BUTTONS = [{ name: 'clear-input', disp: 'CE', value: 'ce', },
{ name: 'clear-all', disp: 'C', value: 'c', },
{ name: 'delete', disp: '⟵', value: 'del', },
{ name: 'divide', disp: '÷', value: '/', },
{ name: 'number-seven', disp: '7', value: 7, },
{ name: 'number-eight', disp: '8', value: 8, },
{ name: 'number-nine', disp: '9', value: 9, },
{ name: 'multiply', disp: '×', value: 'x', },
{ name: 'number-four', disp: '4', value: 4, },
{ name: 'number-five', disp: '5', value: 5, },
{ name: 'number-six', disp: '6', value: 6, },
{ name: 'subtract', disp: '-', value: '-', },
{ name: 'number-one', disp: '1', value: 1, },
{ name: 'number-two', disp: '2', value: 2, },
{ name: 'number-three', disp: '3', value: 3, },
{ name: 'add', disp: '+', value: '+', },
{ name: 'pos-neg', disp: '±', value: 'plus-minus', },
{ name: 'number-zero', disp: '0', value: 0, },
{ name: 'decimal', disp: '.', value: '.', },
{ name: 'equals', disp: '=', value: '=', }];
const DEFAULT_NUM = '0';
const DEFAULT_STR = '';
const MAX_INPUT = 10;
const currDispInput = document.getElementById('current-input');
let currInput;
let currOperating;




function initializeCalc() {
  const buttons = document.getElementById('calc-buttons');
  for (button of CALC_BUTTONS) {
    const calcButton = document.createElement('button');
    calcButton.setAttribute('id', `button-${button.name}`);
    calcButton.setAttribute('class', 'calc-button');
    calcButton.setAttribute('value', button.value);
    calcButton.textContent = button.disp;
    buttons.appendChild(calcButton);
    calcButton.addEventListener('mouseup', getInput)
  }
}

function getInput() {
  // if a number add to current input
  if (Number(this.value) || this.value == 0) {
    // check length max 13
    if (currInput.length < MAX_INPUT) {
      currInput = (currInput == 0) ? this.value : currInput + this.value;
    }
    console.log(currInput.length);
    updateCurrentInput();
  } else {  // if not do smelse
    switch (this.value) {
      case 'ce':
        currInput = DEFAULT_NUM;
        break;
      default:
        console.log('default');
    }
    updateCurrentInput();
  }

}

function updateCurrentInput() {
  currDispInput.textContent = Number(currInput).toLocaleString(navigator.language);
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
  currInput = DEFAULT_NUM;
  currOperating = DEFAULT_STR;
};