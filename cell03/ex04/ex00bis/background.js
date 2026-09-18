function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function() {
    $('#changeColorBtn').click(function() {
        $('body').css('background-color', getRandomColor());
    });
});function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function() {
    $('#changeColorBtn').click(function() {
        $('body').css('background-color', getRandomColor());
    });
});