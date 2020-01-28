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
    if(isNaN(binToDec)) binToDec = result;
    toEval += binToDec+this.innerHTML;
    op1 = '';
}

function finalResults(){
    if(op1 === '') return;
    let binToDec = parseInt(op1,2);
    toEval += binToDec;
    op1 = '';
    result = eval(toEval);
    toEval = '';
    displayScreen.innerHTML = (result >>> 0).toString(2);
}

function clear(){
    displayScreen.innerHTML = '';
    op1 = '';
    toEval = '';
    result = 0;
}

let op1 = '';
let toEval = '';
let result = 0;
//button 0
btn0.addEventListener('click', btnClick);
btn0.addEventListener('click', addToOperand);
//button 1
btn1.addEventListener('click', btnClick);
btn1.addEventListener('click', addToOperand);
//button sum
btnSum.addEventListener('click', btnClick);
btnSum.addEventListener('click', operatorButton);
//button subtraction
btnSub.addEventListener('click', btnClick);
btnSub.addEventListener('click', operatorButton);
//button multiplication
btnMul.addEventListener('click', btnClick);
btnMul.addEventListener('click', operatorButton);
//button division
btnDiv.addEventListener('click', btnClick);
btnDiv.addEventListener('click', operatorButton);
//button equals
btnEql.addEventListener('click',finalResults);
//button clear
btnClr.addEventListener('click', clear);