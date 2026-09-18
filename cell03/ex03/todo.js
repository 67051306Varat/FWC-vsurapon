const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

function saveToCookie() {
    const todos = [];
    for (let child of ftList.children) {
        todos.push(child.textContent);
    }
    document.cookie = "ft_list=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;max-age=31536000";
}

function loadFromCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === 'ft_list' && value) {
            try {
                const todos = JSON.parse(decodeURIComponent(value));
                todos.forEach(text => addTodo(text, false));
            } catch (e) {
                console.error("Error parsing cookie data", e);
            }
        }
    }
}

function addTodo(text, isNew = true) {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function() {
        if (confirm('Do you really want to remove this TO DO?')) {
            todoDiv.remove();
            saveToCookie();
        }
    });

    if (isNew) {
        ftList.insertBefore(todoDiv, ftList.firstChild);
        saveToCookie();
    } else {
        ftList.appendChild(todoDiv);
    }
}

newBtn.addEventListener('click', function() {
    const text = prompt('Enter a new TO DO:');
    if (text !== null && text.trim() !== '') {
        addTodo(text.trim(), true);
    }
});

window.onload = function() {
    loadFromCookie();
};