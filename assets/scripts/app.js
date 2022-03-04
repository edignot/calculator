let userInput = document.getElementById('input-number')
const addBtn = document.getElementById('btn-add')
const subtractBtn = document.getElementById('btn-subtract')
const multiplyBtn = document.getElementById('btn-multiply')
const divideBtn = document.getElementById('btn-divide')
const currentResultOutput = document.getElementById('current-result')

const defaultResult = 0
let currentResult = defaultResult

addBtn.addEventListener('click', addNumber)
subtractBtn.addEventListener('click', substractNumber)
multiplyBtn.addEventListener('click', multiplyNumber)
divideBtn.addEventListener('click', divideNumber)

function addNumber() {
  currentResult = currentResult + parseInt(userInput.value)
  outputResult()
}

function substractNumber() {
  currentResult = currentResult - parseInt(userInput.value)
  outputResult()
}

function multiplyNumber() {
  currentResult = currentResult * parseInt(userInput.value)
  outputResult()
}

function divideNumber() {
  currentResult = currentResult / parseInt(userInput.value)
  outputResult()
}

function outputResult() {
  currentResultOutput.textContent = currentResult
}
