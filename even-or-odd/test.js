const chai = require('chai')

import { 
  inputIsEmpty,
  readUserInput,
  inputHasThreeArguments, 
  isolateUserInput,
  isNumber,
  isDivisibleBy2,
  findAnswer
} from './main'

function mockReadInput() {
  let mockInput = ['node', 'file.js', 'input']
  return mockInput
}

let mockEmptyInput = []
let mockInputx3 = ['mockInput1', 'mockInput2', 'mockInput3']
let mockInputx4 = ['mockInput1', 'mockInput2', 'mockInput3', 'mockInput4']
let numericInput = '8'
let mockInputEven = ['mockInput1', 'mockInput2', '4']
let mockInputOdd = ['mockInput1', 'mockInput2', '9']
let alphaInput = 'alphaInput'
let evenInput = 4
let oddInput = 7

describe('Even or odd', () => {

  describe('process array from command line', () => {
    it('should read in the array from command line argument', () => {
      let input = mockReadInput()
      chai.assert.isNotNull(input)
    })
  })

  describe('input is empty function', () => {
    it('should return true if input is empty', () => {
      chai.assert.isTrue(inputIsEmpty(mockEmptyInput))
    })
    it('should return false if input is not empty', () => {
      chai.assert.isFalse(inputIsEmpty(mockInputx3))
    })
  })

  describe('is a number function', () => {
    it('should return true if the variable is a number', () => {
      chai.assert.isTrue(isNumber(numericInput))
    })
    it('should return false is the variable is not a number', () => {
      chai.assert.isFalse(isNumber(alphaInput))
    })  
  })

  describe('is divisible by 2 function', () => {
    it('should return true if the variable is divisble by 2', () => {
      chai.assert.isTrue(isDivisibleBy2(evenInput))
    })
    it('should return false if the variable is not divisible by 2', () => {
      chai.assert.isFalse(isDivisibleBy2(oddInput))
    })
  })

  describe('isolate user input function', () => {
    it('should return the user input if it exists', () => {
      chai.assert.isString(isolateUserInput(mockInputx3))
    })
    it('should return false if the user input does not exist', () => {
      chai.assert.isFalse(isolateUserInput(numericInput))
    })
  })

  describe('input has three arguments function', () => {
    it('should return true if input has three arguments', () => {
      chai.assert.isTrue(inputHasThreeArguments(mockInputx3))
    })
    it('should return false if input has less 3 < x > 3 arguments', () => {
      chai.assert.isFalse(inputHasThreeArguments(mockInputx4))
      chai.assert.isFalse(inputHasThreeArguments(mockEmptyInput))
      chai.assert.isFalse(inputHasThreeArguments(alphaInput))
    })
  })

  describe('find answer function', () => {
    it('should return Even if input is even', () => {
      chai.expect(findAnswer(mockInputEven)).to.equal('Even')
    })
    it('should return Odd if input is odd', () => {
      chai.expect(findAnswer(mockInputOdd)).to.equal('Odd')
    })
  })

})