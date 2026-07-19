let display = document.getElementById('display');

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}


function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function percent() {
    try {
        let DV = display.value
        display.value = eval(DV) / 100;
    } catch {
        display.value = "Error";
    }
}

function calculateResult() {
    try {
        let DV = display.value
        .replace(/×/g, "*")
        .replace(/÷/g, "/");
        display.value = eval(DV);
    } catch {
        display.value = "Error"
    }
    
}
