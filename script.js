function appendToResult(value) {
  document.getElementById('result').value += value;
}

function add(value) {
  let result = +value[1] + +value[0]
  document.getElementById('result').value = String(result);
}

function minus(value) {
  let result = +value[0] - +value[1]
  document.getElementById('result').value = String(result);
}

function mult(value) {
  console.log(value)
  let result = Number(value[0]) * Number(value[1])
  document.getElementById('result').value = result
}

function devide(value) {
  let result = Number(value[0]) / Number(value[1])
  document.getElementById('result').value = String(result);
}

function degree(value) {
  let result = Math.pow(Number(value[0]), Number(value[1]))
  document.getElementById('result').value = String(result);
}

function squareRoot(value) {
  console.log(value)
  let result = Math.sqrt(Number(value.slice(1)))
  document.getElementById('result').value = String(result);
}

function rest(value){
  let result = Number(value[0]) % Number(value[1])
  document.getElementById('result').value = String(result);
}


function clearResult() {
  document.getElementById('result').value = '';
}


function calculate() {
  let expression = document.getElementById('result').value;
  let symbols = /[+\-*\/^%√]/g;
  let calc = String(expression.match(symbols))
  switch (calc) {
    case '+':
      add(expression.split('+'))
      break;
    case '-':
      minus(expression.split('-'))
      break;
    case '*':
      mult(expression.split('*'))
      break;
    case '/':
      devide(expression.split('/'))
      break;
    case '^':
      degree(expression.split('^'))
      break;
    case '√':
      squareRoot(expression)
      break;
    case '%':
      rest(expression.split('%'))
      break;

    default:
      window.alert("Щось пішло не так")
      break;
  }
}

