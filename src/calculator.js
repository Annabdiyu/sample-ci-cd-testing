function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
function average(a,b){ //wrong code divide by 3 instead of 2
  return (a+b)/3;
}
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  average
};
