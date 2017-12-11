
let input = readUserInput() 

if (inputIsEmpty(input)) {
  console.log('input cannot be empty')
} else if (!inputHasThreeArguments(input)) {
  console.log('should only have three arguments e.g. `node main.js 2`')
} else {
  findAnswer(input)
}


function findAnswer(input) {
  if (!isolateUserInput(input)) {
    console.log('User input must not be null')
    return false
  }
  if (isDivisibleBy2(isolateUserInput(input))) {
    console.log('Even')
    return 'Even'
  } else {
    console.log('Odd')
    return 'Odd'
  }
}

function isNumber(input) {
  if (isNaN(parseInt(input))) {
    return false
  }
  return true
}

function isDivisibleBy2(input) {
  if (isNumber(input) && (input%2 === 0)) {
    return true
  }
  return false
}


function isolateUserInput(input) {
  let userInput = input[2]
  if (inputIsEmpty(userInput)) {
    console.log('input must have three arguments')
    return false
  }
  return userInput
}

function inputHasThreeArguments(input) {
  if (input.length === 3) {
    return true
  }
  return false
}


function inputIsEmpty(input) {
  if (!input || (input.length <= 0)) {
    return true
  }
  return false
}


function readUserInput() {
  let userInput = false
  process.argv.forEach((val, index, array) => {
    userInput = array
  })
  return userInput
}

module.exports = {
  readUserInput,
  inputIsEmpty,
  inputHasThreeArguments,
  isolateUserInput,
  isNumber,
  isDivisibleBy2,
  findAnswer
}