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
        if (display.textContent.split('').includes('=') && display.textContent.split('').includes('^') == false) {
            display.textContent = ''
        } 
        display.textContent += button.textContent
    })
    keyPadContainerParent.appendChild(button)
}

// adjusting spacing
keyPadContainerParent.style.width = (60 * 3) + 13 + 'px'

// creating the bottom three buttons below the number pad buttons
for (i = 1; i <= 2; i++) {
    const button = document.createElement('button')
    button.style.height = '50px'
    button.style.borderRadius = '32px'
    button.setAttribute('id',`bottom${i}`)
    if (i == 1) {
        button.textContent = 'AC'
        button.addEventListener('click', () => {
            display.textContent = ''
        })
        button.style.width = '60px'
    } else {
        button.textContent = '='
        button.addEventListener('click', () => {
            if (display.textContent.split('').includes('+')) {
                index = display.textContent.split('').indexOf('+')
                operator = display.textContent[index]
            } else if (display.textContent.split('').includes('-')) {
                index = display.textContent.split('').indexOf('-')
                operator = display.textContent[index]
            } else if (display.textContent.split('').includes('=')) {
                index = display.textContent.split('=').join('')
            } else if (display.textContent.split('').includes('*')) {
                index = display.textContent.split('').indexOf('*')
                operator = display.textContent[index]
            } else if (display.textContent.split('').includes('/')) {
                index = display.textContent.split('').indexOf('/')
                operator = display.textContent[index]
            } else if (display.textContent.split('').includes('^')) {
                index = display.textContent.split('').indexOf('^')
                operator = display.textContent[index]
            } else {
                display.textContent = button.textContent + ' ' + display.textContent
                return
            }
            a = Number(display.textContent.slice(0, index - 1))
            console.log(a)
            b = Number(display.textContent.slice(index + 2))
            console.log(b)
            display.textContent = button.textContent + ' ' + operate(a, b, operator)
        })
        button.style.width = '125px'
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
        button.textContent = '*'
    } else {
        button.textContent = '/'
    }
    button.addEventListener('click', () => {
        if (display.textContent.split('').includes('=')) {
            display.textContent = display.textContent.split('=').join('')
        }
        display.textContent += ' ' + button.textContent + ' '
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

const multiply = function (a, b) {
  return a * b
};

const divide = function (a, b) {
  return a / b
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
        console.log(add(a, b))
        return add(a, b)
    } else if (operator == '-') {
        console.log(subtract(a, b))
        return subtract(a ,b)
    } else if (operator == '*') {
        console.log(multiply(a, b))
        return multiply(a, b)
    } else if (operator == '/') {
        console.log(divide(a, b))
        return divide(a, b)
    } else if (operator == '^') {
        console.log(power(a, b))
        return power(a, b)
    }
}

