const balloon = document.getElementById('balloon');
const colors = ['red', 'green', 'blue'];

let currentSize = 200;
let colorIndex = 0;

function updateBalloon() {
    balloon.style.width = `${currentSize}px`;
    balloon.style.height = `${currentSize}px`;
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', function() {
    currentSize += 10;
    
    if (currentSize > 420) {
        currentSize = 200;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
    }
    
    updateBalloon();
});

balloon.addEventListener('mouseleave', function() {
    currentSize = Math.max(200, currentSize - 5);
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    
    updateBalloon();
});