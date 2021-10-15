let number1;
do {
  number1 = +prompt("Enter your first number.");
} while(isNaN(number1));

const sign = prompt("Enter math sing( +, -, *, /, %, ^).");

let number2;
do {
  number2 = +prompt("Enter your second number.");
} while(isNaN(number2));


function doMath(x, znak, y) {
  switch(znak) {
    case '+':
      return x + y;

    case '-':
      return x - y;

    case '*':
      return x * y;

    case '/':
      return x / y;

    case '%':
      return x % y;

    case '^':
      return x ^ y;
    
    default:
      document.write('Unknown sign!');
  }
}

const result = doMath(number1, sign, number2);

document.write('Operation result: ' + result);


