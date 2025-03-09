'use strict'

const firstInput = document.getElementById('first-number-input');
const secondInput = document.getElementById('second-number-input');
const resultDiv = document.getElementById('result');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const clearBtn = document.getElementById('clear');
const inputs = document.querySelectorAll('.input');

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }


    setX() {
       return this.num1 = Number(firstInput.value)
    }

    setY() {
        return this.num2 = Number(secondInput.value)
    }

    logSum() {
        resultDiv.innerHTML = this.setX() + this.setY()
    }

    logMul(){
        resultDiv.innerHTML = this.setX() * this.setY()
    }
    logDiv(){
        if(this.num1 === 0 || this.num2 === 0){
            throw new Error("You are dividing by zero")
        }else{
            resultDiv.innerHTML = this.setX() / this.setY()
        }
        
    }
    logSub(){
            resultDiv.innerHTML = this.setX() - this.setY()
        }
        
    }

}


const calculator = new Calculator();


plusBtn.addEventListener('click', () => calculator.logSum());
minusBtn.addEventListener('click', () => calculator.logSub());
divideBtn.addEventListener('click', () =>  calculator.logDiv());
multiplyBtn.addEventListener('click', () => calculator.logMul());
clearBtn.addEventListener('click', function(){
inputs.forEach(input => input.value = '')
resultDiv.innerHTML = ''
})
