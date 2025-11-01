let dispaly = document.getElementById('display');

function val(value) {
    dispaly.value += value;
}


function backspacce() {
    dispaly.value = dispaly.value.slice(0, -1);
}

function clearall() {
    dispaly.value = '';
}

function par() {
    dispaly.value = parseFloat(dispaly.value) / 100;
}

function result() {
    try {
        dispaly.value = eval(dispaly.value);
    } catch {
        dispaly.value = "Error"
    }
    
}