$(document).ready(function() {
    const $balloon = $('#balloon');
    const colors = ['red', 'green', 'blue'];

    let currentSize = 200;
    let colorIndex = 0;

    function updateBalloon() {
        $balloon.css({
            'width': currentSize + 'px',
            'height': currentSize + 'px',
            'background-color': colors[colorIndex]
        });
    }

    $balloon.click(function() {
        currentSize += 10;
        
        if (currentSize > 420) {
            currentSize = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        
        updateBalloon();
    });

    $balloon.mouseleave(function() {
        currentSize = Math.max(200, currentSize - 5);
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        
        updateBalloon();
    });
});