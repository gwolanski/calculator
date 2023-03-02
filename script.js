const expressionDisplay = document.getElementById('display1');
expressionDisplay.innerHTML = "0";
const resultDisplay = document.getElementById('display2');
const result = "";
let equalSelected = false;

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
    const equals = document.getElementById("equals");
    const numberBtns = document.getElementsByClassName("number");

    if (buttonSelect == 'AC') {
        expressionDisplay.innerHTML = "0";
    } else {
        if (expressionDisplay.innerHTML == "0") {
            expressionDisplay.innerHTML = "";
        } else if (equalSelected == true) {
            console.log("buildExpression function. equalSelected = true");
            for (const btn of numberBtns) {
                btn.addEventListener("click", () => {
                    expressionDisplay.innerHTML = "";
                    equalSelected = false;
                    console.log("buildExpression. equalSelected: " + equalSelected)
            })
        }
        } 
        expressionDisplay.innerHTML += buttonSelect;
    }
}


//     if (equals.className === 'operated') {
//         for (const btn of numberBtns) {
//             btn.addEventListener("click", () => {
//                 expressionDisplay.innerHTML = "";
//                 equals.classList.remove("operated");
//             })
//         }
//     }


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
        return parseInt(constant);
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
            result = "💥💥💥💥💥💥💥";
        } else {
            result = numberArray.reduce(divide);
            console.log("result: " + result);
        }
    }   
    
    let modifiedResult = parseFloat(result.toFixed(10));
    console.log("modified result: " + modifiedResult);
    
    return modifiedResult;
}
//5. update original expression with newString + 2nd removed operator
function updateDisplay(result) {
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
    equalSelected = true;

    let operator = identifyFirstOperator(expressionDisplay.innerHTML);
    let numberArray = stringToNumberArray(expressionDisplay.innerHTML, operator);
    let result = operate(numberArray, operator);
    updateDisplay(result);
;}



// function postOperate() {
//     const numberBtns = document.getElementsByClassName("number");
//     if (equals.className === 'operated') {
//         for (const btn of numberBtns) {
//             btn.addEventListener("click", () => {
//                 expressionDisplay.innerHTML = "";
//                 equals.classList.remove("operated");
//             })
//         }
//     } else {
//         console.log("you are out of the loop");
//     }
// }

function deleteLastCharacter (localExpression) {
    let revisedString = '';
    for (let i = 0; i < localExpression.length-1; i++) {
        revisedString += localExpression[i];
    }
    expressionDisplay.innerHTML = revisedString;
}


//parseInt will only work for non decimal numbers

//After pressing equals (when result is displayed), if a number is pressed I'd like to clear the display. Look at buildExpression function for inspiration.
    //I added a class of "number" to the # buttons as a first step.
//After pressing equals (when result is displayed), if an operator is pressed I'd like to append it to the currently displated result
    //I added a class of "operator" to the operator buttons as a first step.

//perhaps add an event listener to the equals sign that does the above 
    //1. add event listener to equals that on click adds ID to equals btn
    //2. if ID is true, run function for each button of buttons
    //3. if btn class is number, run function that clears the display
    //4. if btn class is operator, keep things as is since they alreay append
    //5. remove ID

    //another similar idea: after running an operation we can include in the function to set resultDisplayed = true. reset innerHTML if number pressed when true, then set to false

