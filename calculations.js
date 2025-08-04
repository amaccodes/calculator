// constructing the UI for the calculator

// define the node for the the display of the calculator
const display = document.querySelector('#the-display')

const keyPadContainerParent = document.querySelector('#key-pad-container')
for (i = 1; i <= 12; i++) {
    const button = document.createElement('button')
    button.style.height = '50px'
    button.style.width = '60px'
    button.style.borderRadius = '32px'
    button.setAttribute('id', `b${i}`)
    if (i == 10) {
        button.textContent = 0
    } else if (i == 11) {
        button.textContent = '.'
    } else if (i == 12) {
        button.textContent = '^'
    } else {
        button.textContent = i
    }
    button.addEventListener('click', () => {
        display.textContent += button.textContent
    })
    keyPadContainerParent.appendChild(button)
}

// adjusting spacing
keyPadContainerParent.style.width = (60 * 3) + 13 + 'px'

// creating the bottom three buttons below the number pad buttons
for (i = 1; i <= 3; i++) {
    const button = document.createElement('button')
    button.style.height = '50px'
    button.style.width = '60px'
    button.style.borderRadius = '32px'
    button.setAttribute('id',`bottom${i}`)
    if (i == 1) {
        button.textContent = '+/-'
        button.addEventListener('click', () => {
        //display.textContent = 
    })
    } else if (i == 2) {
        button.textContent = 'AC'
        button.addEventListener('click', () => {
        display.textContent = ''
    })
    } else {
        button.textContent = '='
        button.addEventListener('click', () => {
        display.textContent +=  ' ' + button.textContent + ' ' + operate(display.textContent)
    })
    }
    keyPadContainerParent.appendChild(button)
}

// creating div to wrap around the operator buttons
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


// creating the side operator buttons 
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
    button.addEventListener('click', () => {
        display.textContent += button.textContent
    })
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


function operate(a, b, operator) {
    if (operator == '+') {
        return a + b
    } else if (operator == '-') {
        return a - b
    } else if (operator == '*') {
        return a * b
    } else if (operator == '/') {
        return a / b 
    } else if (operator == 'exp') {
        return a ** b
    }
}

