function startAnimation() {
    var backgroundItems = document.querySelectorAll('.wave_item');
    var index = 0;

    var animationInterval = setInterval(function () {
        if (index >= backgroundItems.length) {
            clearInterval(animationInterval);
            return;
        }

        var backgroundItem = backgroundItems[index];
        backgroundItem.style.transition = 'bottom .7s ease';
        backgroundItem.style.bottom = '0';

        setTimeout(function (item) {
            item.style.transition = 'bottom .7s ease';
            item.style.bottom = '-100%';
        }, 1000, backgroundItem);

        index++;
    }, 200);
}