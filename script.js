let dispaly = document.getElementById('display');

function appendValue(value) {
    dispaly.value += value;
}


function backspace() {
    dispaly.value = dispaly.value.slice(0, -1);
}

function clearDisplay() {
    dispaly.value = '';
}

function percent() {
    dispaly.value = parseFloat(dispaly.value) / 100;
}

function calculateResult() {
    try {
        dispaly.value = eval(dispaly.value);
    } catch {
        dispaly.value = "Error"
    }
    
}
