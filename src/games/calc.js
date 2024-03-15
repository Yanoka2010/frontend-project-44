import { getAnswer, answerCheck } from '../index.js';

export const str = 'What is the result of the expression?';

function randomOperation() {
    const operations = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }
  function generateMathExpression() {
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);
    const operator = randomOperation();
    return `${num1} ${operator} ${num2}`;
  }
  function calculateExpression(expression) {
    return eval(expression);
  }
  export function brainCalc(PlayerName) {
    const expression = generateMathExpression();
    const correctAnswer = calculateExpression(expression);
    const question = `${expression}`;
    const answer = getAnswer(question);
    return answerCheck(answer, correctAnswer, PlayerName);
  }