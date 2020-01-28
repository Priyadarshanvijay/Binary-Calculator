let btn0 = document.getElementById("btn0");
let displayScreen = document.getElementById("res");

function btnClick(){
    displayScreen.innerHTML = displayScreen.innerHTML+this.innerHTML;
}

function clear(){
    displayScreen.innerHTML = '';
}

let op1 = '';
let toEval = '';


btn0.addEventListener('click', btnClick);
btn1.addEventListener('click', btnClick);
btnSum.addEventListener('click', btnClick);
btnSub.addEventListener('click', btnClick);
btnMul.addEventListener('click', btnClick);
btnDiv.addEventListener('click', btnClick);
btnClr.addEventListener('click', clear);