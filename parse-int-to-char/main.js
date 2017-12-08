
let input = readUserInput()

if (inputIsEmpty(input)) {
  console.log('input must not be empty')
} else if (!inputHasThreeArguments(input)) {
  console.log('input must only have three arguments')
} else {
  findAnswer(input)
}

function findAnswer(input) {
  let age = findAgeValue(isolateUserInputString(input))
  let answer = checkIsValidNumber(age)
  if (answer) {
    console.log('Answer is: ', answer)
  }
} 

function checkIsValidNumber(age) {
  let numericAge = parseInt(age)
  if (!numericAge) {
    console.log('age must be a numeric value')
    return false
  } else if (numericAge < 0 || numericAge > 9) {
    console.log('age must be between 0 and 9')
    return false
  }
  return numericAge
}

function findAgeValue(input) {
  let userInputArray = input.toString().split(' ')
  if (!inputHasThreeArguments(userInputArray)) {
   console.log('input must be in the following format "1 year old" or "5 years old"')
   return false
  }
  return userInputArray[0]
}

function isolateUserInputString(input) {
  let userInputString = input[2]
  if (inputIsEmpty(userInputString)) {
    console.log('input must have three arguments')
    return false
  }
  return userInputString
}

function readUserInput() {
  let userInput = false
  process.argv.forEach((val, index, array) => {
    userInput = array
  })
  return userInput
}

function inputIsEmpty(input) {
  if (!input || (input.length <= 0)) {
    return true
  }
  return false
}

function inputHasThreeArguments(input) {
  if (input.length === 3) {
    return true
  }
  return false
}
