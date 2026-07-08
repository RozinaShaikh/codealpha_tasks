const display = document.getElementById("display");
const previousCalculation = document.getElementById("previousCalculation");

let resultDisplayed = false;

function appendValue(value) {

    const operators = ['+', '-', '*', '/'];

    // If result is displayed and user presses a number
    if (resultDisplayed && !operators.includes(value)) {
        display.value = value;
        resultDisplayed = false;
        return;
    }

    // If result is displayed and user presses an operator
    if (resultDisplayed && operators.includes(value)) {
        display.value += value;
        resultDisplayed = false;
        return;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
    previousCalculation.textContent = "";
    resultDisplayed = false;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        const expression = display.value;
        const result = eval(expression);

        previousCalculation.textContent =
            `${expression} = ${result}`;

        display.value = result;
        resultDisplayed = true;

    } catch {

        display.value = "Error";
        resultDisplayed = true;

    }
}

document.addEventListener("keydown", function(event) {

    const key = event.key;
    const operators = ['+', '-', '*', '/'];

    if (!isNaN(key)) {

        if (resultDisplayed) {
            display.value = key;
            resultDisplayed = false;
        } else {
            display.value += key;
        }
    }

    if (operators.includes(key)) {

        if (resultDisplayed) {
            display.value += key;
            resultDisplayed = false;
        } else {
            display.value += key;
        }
    }

    if (key === '.') {

        if (resultDisplayed) {
            display.value = '.';
            resultDisplayed = false;
        } else {
            display.value += '.';
        }
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});