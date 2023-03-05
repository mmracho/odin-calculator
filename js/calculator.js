const CALC_BUTTONS = [
  { name: 'clear-input', disp: 'CE', value: 'ce', },
  { name: 'clear-all', disp: 'C', value: 'c', },
  { name: 'delete', disp: '⟵', value: 'del', },
  { name: 'divide', disp: '÷', value: 'divide', },
  { name: 'number-seven', disp: '7', value: 7, },
  { name: 'number-eight', disp: '8', value: 8, },
  { name: 'number-nine', disp: '9', value: 9, },
  { name: 'multiply', disp: '×', value: 'multiply', },
  { name: 'number-four', disp: '4', value: 4, },
  { name: 'number-five', disp: '5', value: 5, },
  { name: 'number-six', disp: '6', value: 6, },
  { name: 'subtract', disp: '-', value: 'subtract', },
  { name: 'number-one', disp: '1', value: 1, },
  { name: 'number-two', disp: '2', value: 2, },
  { name: 'number-three', disp: '3', value: 3, },
  { name: 'add', disp: '+', value: 'add', },
  { name: 'pos-neg', disp: '±', value: 'plus-minus', },
  { name: 'number-zero', disp: '0', value: 0, },
  { name: 'decimal', disp: '.', value: 'decimal', },
  { name: 'equals', disp: '=', value: 'equals', }
];
const DEFAULT_NUM = '0';
const DEFAULT_STR = '';
const MAX_INPUT = 10;
const currDispInput = document.getElementById('current-input');
const currDispOperating = document.getElementById('operating');
let currInput;
let prevResult;
let currOperator;
let result;
let inputFlag = false;
let changedFlag = true;

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
    if (currInput.length < MAX_INPUT) {
      currInput = (inputFlag || currInput == DEFAULT_NUM) ? this.value : currInput + this.value;
      inputFlag = false;
      changedFlag = true;
    }
    updateCurrentInput();
  } else {  // if not do smelse
    switch (this.value) {
      case 'ce':
        clearInput();
        break;
      case 'c':
        loadDefaults();
        break;
      case 'del':
        delFromInput();
        break;
      case 'plus-minus': // still have issue with maximum values
        currInput = (-1 * currInput).toString();
        changedFlag = true;
        break;
      case 'decimal':
        break;
      case 'equals':
        // if operator empty set currInput and equals
        break;
      default:
        //console.log(this.value, currInput, prevResult, result);
        if (currOperator == DEFAULT_STR) {
          if (prevResult == DEFAULT_NUM) {
            prevResult = currInput;
            changedFlag = false;
            inputFlag = true;
            currOperator = this.value;
          } else {
            operate(currOperator, currInput, prevResult);
            currOperator = this.value;
          }
        } else {
          operate(currOperator, currInput, prevResult)
          currOperator = this.value;
        }
        currDispOperating.textContent = prevResult + this.value;
    }
    updateCurrentInput();
  }
}

function delFromInput() {
  if (currInput.length === 1 || currInput.slice(0, -1) == '-') {
    currInput = DEFAULT_NUM;
  } else {
    currInput = currInput.slice(0, -1);
  }
}

function updateCurrentInput() {
  currDispInput.textContent = Number(currInput).toLocaleString(navigator.language);
}

function addNumbers(num1, num2) {
  return (Number(num1) + Number(num2)).toString();
}

function subtractNumbers(num1, num2) {
  return (Number(num2) - Number(num1)).toString();
}

function multiplyNumbers(num1, num2) {
  return (Number(num2) * Number(num1)).toString();;
}

function divideNumbers(num1, num2) {
  return;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case 'add':
      if (changedFlag) {
        result = addNumbers(num1, num2);
        currInput = result
        prevResult = result
        inputFlag = true;
        changedFlag = false;
      }
      break;
    case 'subtract':
      if (changedFlag) {
        result = subtractNumbers(num1, num2);
        currInput = result
        prevResult = result
        inputFlag = true;
        changedFlag = false;
      }
      break;
    case '*':
      result = multiplyNumbers(num1, num2);
    case '/':
      result = divideNumbers(num1, num2);
    default:
      result = 'OOPS';
  }
}

function clearInput() {
  currInput = DEFAULT_NUM;
}

function loadDefaults() {
  currInput = DEFAULT_NUM;
  prevResult = DEFAULT_NUM;
  currOperator = DEFAULT_STR;
  result = DEFAULT_NUM;
  currDispOperating.textContent = DEFAULT_STR;
}

window.onload = () => {
  initializeCalc();
  loadDefaults();
};