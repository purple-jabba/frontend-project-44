const calculate = (numOne, numTwo, symb) => {
  let calc = symb;
  switch (calc) {
    case '+':
      calc = numOne + numTwo;
      break;
    case '-':
      calc = numOne - numTwo;
      break;
    case '*':
      calc = numOne * numTwo;
      break;
    default:
  }
  return calc;
};

export default calculate;
