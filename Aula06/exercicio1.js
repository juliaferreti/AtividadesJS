const calculadoraContainer = document.getElementById('calculadora');

const container = document.createElement('div');
container.classList.add('container');

const titulo = document.createElement('h1');
titulo.textContent = 'Calculadora';
titulo.classList.add('titulo-calculadora');

container.appendChild(titulo);

container.appendChild(calculadoraContainer);

function createButton(text, className, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button', className);
    button.addEventListener('click', onClick);
    return button;
}

function createRow(buttons) {
    const row = document.createElement('div');
    row.classList.add('row');
    buttons.forEach(button => {
        row.appendChild(button);
    });
    return row;
}

const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '=']
];

buttons.forEach(row => {
    const buttonRow = createRow(row.map(text => {
        let className = '';
        if (text === 'AC' || text === '+/-' || text === '%') {
            className = 'light-gray';
        } else if (text === '÷' || text === 'x' || text === '-' || text === '+' || text === '=') {
            className = 'orange';
        } else if (text === '0') {
            className = 'zero-button';
        } else {
            className = 'gray';
        }
        return createButton(text, className, () => handleButtonClick(text));
    }));
    calculadoraContainer.appendChild(buttonRow);
});

function handleButtonClick(value) {
    const display = document.getElementById('display');
    switch (value) {
        case 'AC':
            display.value = '';
            break;
        case '+/-':
            display.value = parseFloat(display.value) * -1;
            break;
        case '%':
            display.value = parseFloat(display.value) / 100;
            break;
        case ',':
            if (!display.value.includes('.')) {
                display.value += '.';
            }
            break;
        case '=':
            try {
                display.value = evaluateExpression(display.value);
            } catch (error) {
                display.value = 'Error';
            }
            break;
        case 'Backspace':
            display.value = display.value.slice(0, -1);
            break;
        default:
            display.value += value;
            break;
    }
}

function evaluateExpression(expression) {
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
    return Function('"use strict";return (' + expression + ')')();
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === 'Enter' || key === 'Backspace') {
        if (key === 'Enter') {
            handleButtonClick('=');
        } else {
            handleButtonClick(key);
        }
    }
});

const botaoVoltar = document.createElement('button');
botaoVoltar.textContent = 'Voltar';
botaoVoltar.classList.add('voltar');

botaoVoltar.addEventListener('click', function() {
    window.history.back();
});

container.appendChild(botaoVoltar);

document.body.appendChild(container);