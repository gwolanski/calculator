//1. find operator
//2. find operator inputs (only 2)
    //2.1 convert inputs to numbers
//3. apply operators to number inputs and display result each time we apply an operator to 2 numbers (PEMDAS doesn't matter at this point)


const expressionDisplay = document.getElementById('display1');
const resultDisplay = document.getElementById('display2');
const result = "";

//create functions for the following: add, subtract, multiple, divide
const add = function(a,b) {
    return a + b;
  };

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(array) {
    return a * b;
  };

const divide = function(a,b) {
    return a / b;
};

function buildExpression (buttonSelect) {
    if (buttonSelect == 'AC') {
        expressionDisplay.innerHTML = "";
        resultDisplay.innerHTML = "";
    } else {
        expressionDisplay.innerHTML += buttonSelect;
    }
}

//create function that takes an operator and 2 numbers and then uses one of the above functions on the numbers
//will need to change 'expression' to take 'expressionDisplay' as the argument once I get it working
function operate() {
    let expression = expressionDisplay.innerHTML;
    let result = 0;

    if (expression.includes('+')) {
        result = 0;
        let stringArray = expression.split('+');
        let numberArray = stringArray.map ((constant) => {
            return parseInt(constant);
        });
        result = numberArray.reduce(add);
        resultDisplay.innerHTML = result;
    } else if (expression.includes('-')) {
        let stringArray = expression.split('-');
        let numberArray = stringArray.map ((constant) => {
            return parseInt(constant);
        });
        result = numberArray.reduce(subtract);
        resultDisplay.innerHTML = result;
    } else if (expression.includes('x')) {
        result = 1;
        let stringArray = expression.split('x');
        let numberArray = stringArray.map ((constant) => {
            return parseInt(constant);
        });
        numberArray.forEach(num => {
            result *= num;
        });
        resultDisplay.innerHTML = result;
    } else if (expression.includes('÷')) {
        let stringArray = expression.split('÷');
        let numberArray = stringArray.map ((constant) => {
            return parseInt(constant);
        });
        result = numberArray.reduce(divide);
        resultDisplay.innerHTML = result;
    }   

//build function or edit function so result is 
//displayed either after pressing = or after
//pressing another operator after 2nd number
if array.length 

    console.log(result)

}

//parseInt will only work for non decimal numbers