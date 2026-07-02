const digit = document.querySelectorAll(".digit");

const operator = document.querySelectorAll(".operator");

const display = document.querySelector(".display");

const equalTo = document.getElementById("equal-to");

const allClear = document.getElementById("all-clear");

const clear = document.getElementById("clear");

const decimal = document.getElementById("decimal")

let firstNumber = "";

let operatorChosen = "";

let secondNumber = "";

document.addEventListener("keydown", keyPressed);

function keyPressed(e){
    if (e.key >= 0 && e.key <= 9){
        if (!operatorChosen){
            firstNumber += e.key;
            updateDisplay(firstNumber);
        } else {
            secondNumber += e.key;
            updateDisplay(secondNumber);
        }
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        if (secondNumber){
            const result = operate(Number(firstNumber), operatorChosen, Number(secondNumber));

            firstNumber = result.toString();
            updateDisplay(firstNumber);
            secondNumber = "";

            operatorChosen = e.key;
        } else{
            operatorChosen = e.key;
            updateDisplay(operatorChosen);

        } 
    }
    if (e.key === 'Enter' || e.key === '='){
        e.preventDefault();
        if (secondNumber){
            const result = operate(Number(firstNumber), operatorChosen, Number(secondNumber));

            firstNumber = result.toString();
            updateDisplay(firstNumber);

            operatorChosen = "";
            secondNumber = "";
            }
        }
    if (e.key === 'Backspace'){
        if (secondNumber){
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            updateDisplay(secondNumber);
        } else if (firstNumber){
            firstNumber = firstNumber.slice(0, firstNumber.length - 1);
            updateDisplay(firstNumber);
        } else if (operatorChosen){
            operatorChosen = "";
            updateDisplay(operatorChosen);
        }
    }
    if (e.key === 'Escape'){
        clearDisplay();
    }
    if (e.key === '.'){
        if (!operatorChosen) {
            if (!firstNumber) {
                firstNumber = "0.";
            } else if (!firstNumber.includes(".")) {
                firstNumber += ".";
            }
            updateDisplay(firstNumber);
        } else {
            if (!secondNumber) {
                secondNumber = "0.";
            } else if (!secondNumber.includes(".")) {
                secondNumber += ".";
            }
            updateDisplay(secondNumber);
        }
    }
}
decimal.addEventListener("click", () => {
    if (!operatorChosen) {
        if (!firstNumber) {
            firstNumber = "0.";
        } else if (!firstNumber.includes(".")) {
            firstNumber += ".";
        }
        updateDisplay(firstNumber);
    } else {
        if (!secondNumber) {
            secondNumber = "0.";
        } else if (!secondNumber.includes(".")) {
            secondNumber += ".";
        }
        updateDisplay(secondNumber);
    } 
})

clear.addEventListener("click", () =>{
    if (secondNumber){
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        updateDisplay(secondNumber);
    }else if (firstNumber){
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        updateDisplay(firstNumber);
    } else if (operatorChosen){
        operatorChosen = "";
        updateDisplay(operatorChosen);
    }
})

allClear.addEventListener("click", clearDisplay)

function clearDisplay(){
    firstNumber = "";
    operatorChosen = "";
    secondNumber = "";
    updateDisplay(firstNumber);
}


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

