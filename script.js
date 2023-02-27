const expressionDisplay = document.getElementById('display1');
expressionDisplay.innerHTML = "0";
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
       // resultDisplay.innerHTML = "";
    } else {
        if (expressionDisplay.innerHTML == "0") {
            expressionDisplay.innerHTML = "";
        }
        expressionDisplay.innerHTML += buttonSelect;
    }
}

//1. check if 2 operators. if so, move onto 2
function operatorCount(localExpression) {
    let singleOperator = true;
    let operatorNum = 0;
    for (let i = 0; i < localExpression.length; i++) {
        if ((localExpression[i].includes('+')) || (localExpression[i].includes('-')) ||
         (localExpression[i].includes('x')) || (localExpression[i].includes('÷'))) {
            operatorNum++;
         };
    };
    console.log("operatorNum: " + operatorNum);
    if (operatorNum === 2) {
        singleOperator = false;
    }; 
    return singleOperator;
}

//2 get #s to operate on. return newString without last character
function removeSecondOperator(localExpression) {
    let revisedString = '';
    for (let i = 0; i < localExpression.length-1; i++) {
        revisedString += localExpression[i];
    }
    console.log("revisedString: " + revisedString);
    return revisedString;
}


//3.1. identify operator. return operator
function identifyFirstOperator(localExpression) {
    let firstOperator = '';
    if (localExpression.split('+').length == 2) {
        console.log("split epxression: " + localExpression.split('+'));
        firstOperator = '+';
    } else if (localExpression.split('-').length == 2) {
        console.log("split epxression: " + localExpression.split('-'));
        firstOperator = '-';
    } else if (localExpression.split('x').length == 2) {
        console.log("split epxression: " + localExpression.split('x'));
        firstOperator = 'x';
    } else if (localExpression.split('÷'.length == 2)) {
        console.log("split epxression: " + localExpression.split('÷'));
        firstOperator = '÷';
    };
    
    console.log("firstOperator: " + firstOperator);
    return firstOperator;
    
}

//3.2 take newString and make into number array. return numberArray
function stringToNumberArray (stringExpression, operator) {
    let stringArray = stringExpression.split(operator);
    let numberArray = stringArray.map((constant) => {
        return parseInt(constant);
    });
    console.log("numberArray: " + numberArray);
    return numberArray;
}

//4. operate the #s. return result
function operate(numberArray, operator) {
    console.log('operate called');
    let result = 0;

    if (operator.includes('+')) {
        result = 0;
        result = numberArray.reduce(add);
    } else if (operator.includes('-')) {
        result = numberArray.reduce(subtract);
    } else if (operator.includes('x')) {
        result = 1;
        numberArray.forEach(num => {
            result *= num;
        });
    } else if (operator.includes('÷')) {
        result = numberArray.reduce(divide);
    }   
    console.log("result: " + result);
    return result;
}
//5. update original expression with newString + 2nd removed operator
function updateDisplay(result) {
    console.log('updateDisplay called');
    console.log("expressionDisplay: " + expressionDisplay.innerHTML)
    console.log('updateDisplay preliminary result: '+result);
    let singleOperator = operatorCount(expressionDisplay.innerHTML);
    console.log("single operator? " + singleOperator);
    if (singleOperator === true) {
        expressionDisplay.innerHTML = result;
        console.log("single result: " + expressionDisplay.innerHTML);
    } else {
        expressionDisplay.innerHTML = result += expressionDisplay.innerHTML.charAt(expressionDisplay.innerHTML.length-1);
        console.log("double result: " + expressionDisplay.innerHTML);
    }; 
}

function buttonClick() {
    let singleOperator = operatorCount(expressionDisplay.innerHTML);
    console.log("buttonClick singleOperator: " + singleOperator);
    if (singleOperator === false) {
        let revisedString = removeSecondOperator(expressionDisplay.innerHTML);
        let operator = identifyFirstOperator(revisedString);
        let numberArray = stringToNumberArray(revisedString, operator);
        let result = operate(numberArray, operator);
        updateDisplay(result);
    }; 
}

const btns = document.getElementsByClassName("btn");
for (const btn of btns) {
    btn.addEventListener("click", buttonClick);
}

function equalsButton () {
    let operator = identifyFirstOperator(expressionDisplay.innerHTML);
    let numberArray = stringToNumberArray(expressionDisplay.innerHTML, operator);
    let result = operate(numberArray, operator);
    updateDisplay(result)
;}



//build function or edit function so result is 
//displayed either after pressing = or after
//pressing another operator after 2nd number
//function should call operate() if it meets
//the requirement
//do i need to create a variable for the first
//array item, and then replace the value after a
//2nd operator is selected?



//parseInt will only work for non decimal numbers