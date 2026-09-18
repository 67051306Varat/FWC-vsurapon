function isPositiveInteger(value) {
    return /^\d+$/.test(value);
}

document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const leftStr = document.getElementById('left').value.trim();
    const rightStr = document.getElementById('right').value.trim();
    const operator = document.getElementById('operator').value;

    if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
        alert('Error :(');
        return;
    }

    const leftNum = parseInt(leftStr, 10);
    const rightNum = parseInt(rightStr, 10);

    if ((operator === '/' || operator === '%') && rightNum === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert('Please, use me...');
}, 30000);