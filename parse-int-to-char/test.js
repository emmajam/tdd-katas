const assert = require('assert')
const chai = require('chai')

import { inputIsEmpty, readUserInput, inputHasThreeArguments, isolateUserInputString } from './main'

function mockReadInput() {
  let mockInput = ['node', 'file.js', 'input']
  return mockInput
}

let mockEmptyInput = []
let mockInputx3 = ['mockInput1', 'mockInput2', 'mockInput3']
let mockInputx4 = ['mockInput1', 'mockInput2', 'mockInput3', 'mockInput4']

describe('Parse integer to character', function() {

  describe('process array from command line', function() {
    it('should read in the array from command line argument', function() {
      let input = mockReadInput()
      chai.assert.isNotNull(input)
    })
  })

  describe('input is empty function', function() {
    it('should return true if there is no input', function() {
      chai.assert.isTrue(inputIsEmpty(mockEmptyInput))
    })

    it('should return false if input exists', function() {
      
      chai.assert.isFalse(inputIsEmpty(mockInputx3))
    })
  })

  describe('ensure user input only has three arguments', function() {
    it('should return true if input has three arguments', function() {
      chai.assert.isTrue(inputHasThreeArguments(mockInputx3))
    })

    it('should return false if the input has less than three arguments', function() {
      chai.assert.isFalse(inputHasThreeArguments(mockEmptyInput))
    })

    it('should return false if the input has more than three arguments', function() {
      chai.assert.isFalse(inputHasThreeArguments(mockInputx4))
    })
  })

  describe('should separate out user input string from other cmd line arguments', function() {
    it('should return the user input string', function() {
      chai.assert.isNotNull(isolateUserInputString(mockInputx3))
    })

    it('should return false if user input string does not exist', function() {
      chai.assert.isFalse(isolateUserInputString(mockEmptyInput))
    })
  })


})