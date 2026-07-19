let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}


function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function percent() {
    display.value = parseFloat(display.value) / 100;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error"
    }
    
}
