$(document).ready(function() {
    const $ftList = $('#ft_list');

    function saveToCookie() {
        const todos = [];
        $ftList.children('div').each(function() {
            todos.push($(this).text());
        });
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
        const $todoDiv = $('<div></div>').text(text);

        $todoDiv.click(function() {
            if (confirm('Do you really want to remove this TO DO?')) {
                $(this).remove();
                saveToCookie();
            }
        });

        if (isNew) {
            $ftList.prepend($todoDiv);
            saveToCookie();
        } else {
            $ftList.append($todoDiv);
        }
    }

    $('#new_btn').click(function() {
        const text = prompt('Enter a new TO DO:');
        if (text !== null && text.trim() !== '') {
            addTodo(text.trim(), true);
        }
    });

    loadFromCookie();
});