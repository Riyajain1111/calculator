var display = document.getElementById('display');
var str = "";

function clearDisplay() {
    str = "";
    display.value = '';
}

function changeSign() {
    str = eval(str) * (-1);
    display.value = str;
}

function appendNumber(number) {
    str += number;
    display.value = str;
}

function appendOperator(operator) {
    str += operator;
    display.value = str;
}

function appendDecimalPoint() {
    str += ".";
    display.value = str;
}

function evaluateExpression() {
    try {
    str = eval(str);
    display.value = str;
    } catch (err) {
    display.value = "Error";
    }
}