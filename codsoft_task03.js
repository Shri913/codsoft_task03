document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '';
            } else if (value === '=') {
                if (operator && previousInput !== '') {
                    currentInput = operate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    operator = '';
                    previousInput = '';
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput !== '') {
                    if (operator) {
                        currentInput = operate(previousInput, currentInput, operator);
                        display.textContent = currentInput;
                    }
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function operate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);

        switch (op) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return b;
        }
    }
});
