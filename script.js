const expressionDisplay = document.getElementById('display1');

//create functions for the following: add, subtract, multiple, divide
const add = function(a,b) {
    return a + b;
    
    //let sum = 0;
   // for (const item of args) {
   //   sum += item;
   // }
    //return sum;
  };

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(array) {
    return a * b;
    //let product = 1;
   // for (const item of array) {
   //   product *= item;
    //}
    //return product;
  };

const divide = function(a,b) {
    return a / b;
};

//create function that takes an operator and 2 numbers and then uses one of the above functions on the numbers
function operate(expression) {
    if (expression.includes('+')) {
        add(a,b);
    } else if (expression.includes('-')) {
        subtract(a,b);
    } else if (expression.includes('*')) {
        multiply(a,b);
    } else if (expression.includes('/')) {
        divide(a,b)
    }
}

//idea - create a function that adds button pressed to display1 div using innerHTML. put onclick for each button in html that calls the function
//display result in display2 div

function buildExpression (buttonSelect) {
    if (buttonSelect == 'AC') {
        expressionDisplay.innerHTML = "";
    } else {
        expressionDisplay.innerHTML += buttonSelect;
    }
}

function operate() {
    
}
