function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var display = document.getElementById('display').value;
    var result = eval(display); // Note: Using eval for simplicity, consider using a safer method in production
    document.getElementById('display').value = result;
}
