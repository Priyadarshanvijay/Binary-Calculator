let btn0 = document.getElementById("btn0");
let displayScreen = document.getElementById("res");

function btnClick(){
    displayScreen.innerHTML = displayScreen.innerHTML+this.innerHTML;
}

function addToOperand(){
    op1 = op1 + this.innerHTML;
}

function operatorButton(){
    let binToDec = parseInt(op1,2);
    toEval += binToDec+this.innerHTML;
    op1 = '';
}

function finalResults(){
    let binToDec = parseInt(op1,2);
    toEval += binToDec;
    op1 = '';
    result = result + eval(toEval);
    displayScreen.innerHTML = result;
}

function clear(){
    displayScreen.innerHTML = '';
    op1 = '';
    toEval = '';
}

let op1 = '';
let toEval = '';
let result = 0;

btn0.addEventListener('click', btnClick);
btn1.addEventListener('click', btnClick);
btn0.addEventListener('click', addToOperand);
btn1.addEventListener('click', addToOperand);
btnSum.addEventListener('click', btnClick);
btnSub.addEventListener('click', btnClick);
btnMul.addEventListener('click', btnClick);
btnDiv.addEventListener('click', btnClick);
btnClr.addEventListener('click', clear);