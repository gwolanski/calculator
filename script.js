//1. find operator
//2. find operator inputs (only 2)
    //2.1 convert inputs to numbers
//3. apply operators to number inputs and display result each time we apply an operator to 2 numbers (PEMDAS doesn't matter at this point)

const expressionDisplay = document.getElementById('display1');
expressionDisplay.innerHTML = "0";
let expression = expressionDisplay.innerHTML;
const resultDisplay = document.getElementById('display2');
const result = "";

//operator functions
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
        expressionDisplay.innerHTML = "0";
        resultDisplay.innerHTML = "";
    } else {
        if (expression == "0") {
            expressionDisplay.innerHTML = "";
        }
        expressionDisplay.innerHTML += buttonSelect;
    }
}

function stringScan () {
    expression = expressionDisplay.innerHTML;
    console.log('stringScan called');
    let operatorCount = 0;
    for (let i = 0; i < expression.length; i++) {
        if ((expression[i].includes('+')) || (expression[i].includes('-')) ||
         (expression[i].includes('x')) || (expression[i].includes('÷'))) {
            operatorCount++;
         };
    console.log("operator count: " + operatorCount);
    if (operatorCount === 2) {
        //need to find a way to temporarily remove last operator from expression before operating
        //returns NaN if running operate before removing
        //don't want to permanently remove bc I will need to use that operator for next round of equation
        operate();
    }
    }
}

const btns = document.getElementsByClassName("btn");
for (const btn of btns) {
    btn.addEventListener("click", stringScan);
}

function operate() {
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
    console.log("result: " + result)
}

//build function or edit function so result is 
//displayed either after pressing = or after
//pressing another operator after 2nd number
//function should call operate() if it meets
//the requirement
//do i need to create a variable for the first
//array item, and then replace the value after a
//2nd operator is selected?



//parseInt will only work for non decimal numbers