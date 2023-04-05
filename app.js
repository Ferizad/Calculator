const buttons=document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

console.log(buttons);

let calculation=[]
let accumaletiveCalculation

function calculate(button) {
    const value = button.textContent
    if (value== "CLEAR") {
        calculation=[]
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        console.log(accumaletiveCalculation)
        screenDisplay.textContent = eval(accumaletiveCalculation)
    } else {
    calculation.push(value)
    accumaletiveCalculation = calculation.join('')
    screenDisplay.textContent = accumaletiveCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () =>calculate(button)))