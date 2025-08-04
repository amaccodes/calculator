
// constructing the UI for the calculator

const keyPadContainerParent = document.querySelector('#key-pad-container')
for (i = 1; i <= 12; i++) {
    const button = document.createElement('button')
    button.style.height = '50px'
    button.style.width = '60px'
    button.style.borderRadius = '32px'
    button.setAttribute('id', `b${i}`)
    button.textContent = i
    keyPadContainerParent.appendChild(button)
}
const button10 = document.querySelector('#b10')
const button11 = document.querySelector('#b11')
const button12 = document.querySelector('#b12')

button10.textContent = 0
button11.textContent = '.'
button12.textContent = 'exp'


keyPadContainerParent.style.width = (60 * 3) + 13 + 'px'

for (i = 1; i <= 3; i++) {
    const button = document.createElement('button')
    button.style.height = '50px'
    button.style.width = '60px'
    button.style.borderRadius = '32px'
    button.setAttribute('id',`bottom${i}`)
    if (i == 1) {
        button.textContent = '+/-'
    } else if (i == 2) {
        button.textContent = 'AC'
    } else {
        button.textContent = '='
    }
    keyPadContainerParent.appendChild(button)
}

const containerParent = document.querySelector('#containerForKeyPadContainer')
const newDiv = document.createElement('div')
newDiv.setAttribute('id', 'operator-btns')
newDiv.style.backgroundColor = 'black'
newDiv.style.opacity = '0.8'
newDiv.style.width = '60px'
newDiv.style.display = 'flex'
newDiv.style.borderRadius = '32px'
newDiv.style.flexDirection = 'column'
newDiv.style.gap = '5px'
containerParent.appendChild(newDiv)

for (i = 1; i <= 4; i++) {
    const button = document.createElement('button')
    button.style.height = '50px'
    button.style.width = '60px'
    button.style.borderRadius = '32px'
    if (i == 1) {
        button.textContent = '+'
    } else if (i == 2) {
        button.textContent = '-'
    } else if (i == 3) {
        button.textContent = 'x'
    } else {
        button.textContent = '/'
    }
    newDiv.appendChild(button)    
}



// math functions

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};



// three variables

let firstNumber
let secondNumber
let operator