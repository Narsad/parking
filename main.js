let inputNumber  = document.querySelector(".number-in");
let outputNumber = document.querySelector(".number-out");
let Number = '';
let pay = 200;
const barrierEntrance = document.querySelector("#entrance");
const barrierExit     = document.querySelector("#exit");
const outputPayment   = document.querySelector(".output-payment");
const inPay           = document.querySelector(".pay");
function fixNumber(){
    Number = inputNumber.value;
    if(Number){
        barrierEntrance.classList.toggle("animation");
    }
}

function fixExit(){
    if(outputNumber.value == Number){
        outputPayment.innerHTML = pay;
        }
    }

function exit(){
        barrierExit.classList.toggle("animation");
        }

function payment(){
        if(inPay.value == pay){
            exit();
        }
    }
