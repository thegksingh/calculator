const digit = document.querySelectorAll(".digit");

const operator = document.querySelectorAll(".operator");

const display = document.querySelector(".display");

const equalTo = document.getElementById("equal-to");

let firstNumber = "";

let operatorChosen = "";

let secondNumber = "";


equalTo.addEventListener("click", () => {
    if (secondNumber){
        const result = operate(Number(firstNumber), operatorChosen, Number(secondNumber));

        firstNumber = result.toString();
        updateDisplay(firstNumber);

        operatorChosen = "";
        secondNumber = "";
    }
})


digit.forEach((button) => {
    button.addEventListener("click", (e) => {
        const clickedValue = e.target.textContent;

        if (!operatorChosen){
            firstNumber += clickedValue;
            updateDisplay(firstNumber);
        } else {
            secondNumber += clickedValue;
            updateDisplay(secondNumber);
        }
        
    })
});

operator.forEach((button) => {
    button.addEventListener("click", (e) => {
        const clickedValue = e.target.textContent;
        
        if (secondNumber){
            const result = operate(Number(firstNumber), operatorChosen, Number(secondNumber));

            firstNumber = result.toString();
            updateDisplay(firstNumber);
            secondNumber = "";

            operatorChosen = clickedValue;
        } else{
            operatorChosen = clickedValue;
            updateDisplay(operatorChosen);

        } 
    })
});


function updateDisplay(value){
    display.textContent = value;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 === 0){
        return num1 + " can't be divided by 0"
    }
    return num1 / num2;
}

function operate(num1, operater, num2){
    switch(operater){
        case "+":
            return add(num1, num2);
        
        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);
        
        case "/":
            return divide(num1,num2);
    }
}

