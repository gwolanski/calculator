//1. find operator
//2. find operator inputs
    //2.1 convert inputs to numbers
//3. apply operators to number inputs


const expressionDisplay = document.getElementById('display1');
const resultDisplay = document.getElementById('display2');
const result = "";

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



//display result in display2 div

function buildExpression (buttonSelect) {
    if (buttonSelect == 'AC') {
        expressionDisplay.innerHTML = "";
    } else {
        expressionDisplay.innerHTML += buttonSelect;
    }
}

//will first need to parse the expression. maybe use switch statements to evaluate expressions
//function operate() {
    
    // let result = 0;
    // for (let i = 0; i < numArray.length; i++) {
    //     result += numArray[i];
    // }
    // resultDisplay.innerhtml = result; 
    // return result;
//}

//create function that takes an operator and 2 numbers and then uses one of the above functions on the numbers
//will need to change 'expression' to take 'expressionDisplay' as the argument once I get it working
function operate() {
    let expression = expressionDisplay.innerHTML;
   //ideas- either make different split variables for each operator type or try regex stuff
    let stringArray = expression.split('+');
    let numberArray = stringArray.map ((constant) => {
        return parseInt(constant);
    });
    console.log(numberArray);

    let result = 0;

    if (expression.includes('+')) {
        result = 0;
    } else if (expression.includes('-')) {
        result = numberArray[0];
    } else if (expression.includes('*')) {
        result = 1;
    } else if (expression.includes('/')) {
        result = numberArray[0];
    }   

    numberArray.forEach(num => {
        if (expression.includes('+')) {
            result += num;
        } else if (expression.includes('-')) {
            console.log("before res" + result)
            console.log("before num" + num)
            result -= num;
        } else if (expression.includes('*')) {
            multiply(a,b);
        } else if (expression.includes('/')) {
            divide(a,b);
        }   
        
    })

    console.log(result)

}

//parseInt will only work for non decimal numbers