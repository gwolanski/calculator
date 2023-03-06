const expressionDisplay = document.getElementById('display1');
expressionDisplay.innerHTML = "0";
const result = "";
let equalSelected = false;
let decimalInOperand = false;
const btns = document.getElementsByClassName("btn");
const numberBtns = document.getElementsByClassName("number");

//operator functions
const add = function(a,b) {
    return a + b;
  };

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
    return a * b;
  };

const divide = function(a,b) {
    return a / b;
};

function buildExpression (buttonSelect) {
    if (isOperatorButton(buttonSelect)) {
        decimalInOperand = false;
        console.log("decimalInOperand: " + decimalInOperand)
    }
    if (equalSelected && isNumberButton(buttonSelect)) {
        expressionDisplay.innerHTML = ""; 
    }
    equalSelected = false;
    if (buttonSelect == 'AC') {
        expressionDisplay.innerHTML = "0";
        decimalInOperand = false;
    } else {
        if (expressionDisplay.innerHTML == "0" && buttonSelect == ".") {
            expressionDisplay.innerHTML = "0";
        } else if (expressionDisplay.innerHTML == "0") {
            expressionDisplay.innerHTML = "";
        }
        expressionDisplay.innerHTML += buttonSelect;
    }
}

function decimalButton() {
    if (decimalInOperand) {
    } else {
        expressionDisplay.innerHTML += ".";    
        decimalInOperand = true;
        console.log("decimalButton. decimalInOperand: " + decimalInOperand);
    }
}
    

function isNumberButton(buttonSelect) {
    if (buttonSelect == '1' || buttonSelect == '2' || buttonSelect == '3' ||
        buttonSelect == '4' || buttonSelect == '5' || buttonSelect == '6' || 
        buttonSelect == '7' || buttonSelect == '8' || buttonSelect == '9' ||
        buttonSelect == '0') {
      return true;
   }
   return false;
}

function isOperatorButton(buttonSelect) {
    if (buttonSelect == '+' || buttonSelect == '-' || buttonSelect == 'x' ||
    buttonSelect == '÷' ) {
        return true;
    }
    return false;
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
    } else if (localExpression.split('÷').length == 2) {
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
        return parseFloat(constant);
    });
    console.log("numberArray: " + numberArray);
    return numberArray;
}

//4. operate the #s. return result
function operate(numberArray, operator) {
    console.log('operate called');
    let result = 0;
    (console.log("numberArray[1]: " + numberArray[1]));
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
        if (numberArray[1] === 0) {
           return "💥💥💥💥💥💥💥";
        } else {
            result = numberArray.reduce(divide);
            console.log("result: " + result);
        }
    }   
    
    let modifiedResult = parseFloat(result.toFixed(13));
    console.log("modified result: " + modifiedResult);
    
    return modifiedResult;
}
//5. update original expression with newString + 2nd removed operator
function updateDisplay(result) {
    let singleOperator = operatorCount(expressionDisplay.innerHTML);

    if (singleOperator) {
        expressionDisplay.innerHTML = result;
        if (result.length > 15) {
            expressionDisplay.innerHTML = result.substring(0,15);
        }
        console.log("single result: " + expressionDisplay.innerHTML);
    } else {
        let doubleOperatorDisplay = result + expressionDisplay.innerHTML.charAt(expressionDisplay.innerHTML.length-1)
        expressionDisplay.innerHTML = doubleOperatorDisplay;
        if (doubleOperatorDisplay.length > 15) {
            expressionDisplay.innerHTML = doubleOperatorDisplay.substring(0,15);
        }
        console.log("double result: " + expressionDisplay.innerHTML);
    }; 
}

function buttonClick() {
    let singleOperator = operatorCount(expressionDisplay.innerHTML);
    if (singleOperator === false) {
        let revisedString = removeSecondOperator(expressionDisplay.innerHTML);
        let operator = identifyFirstOperator(revisedString);
        let numberArray = stringToNumberArray(revisedString, operator);
        let result = operate(numberArray, operator);
        updateDisplay(result);
    }; 

}


for (const btn of btns) {
    btn.addEventListener("click", buttonClick);
}


function equalsButton () {
    equalSelected = true;

    let operator = identifyFirstOperator(expressionDisplay.innerHTML);
    let numberArray = stringToNumberArray(expressionDisplay.innerHTML, operator);
    let result = operate(numberArray, operator);
    updateDisplay(result);
}

function deleteLastCharacter (localExpression) {
    let revisedString = '';
    for (let i = 0; i < localExpression.length-1; i++) {
        revisedString += localExpression[i];
    }
    expressionDisplay.innerHTML = revisedString;
}
