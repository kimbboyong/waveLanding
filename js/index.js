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


document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu_item');
    const sections = document.querySelectorAll('.section');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const clickedSection = this.textContent.toLowerCase();

            setTimeout(function () {
                sections.forEach(function (section) {
                    if (section.id === clickedSection) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });

                menuItems.forEach(function (menuItem) {
                    menuItem.classList.remove('active');
                });

                item.classList.add('active');
            }, 1000);
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const pageMenu = document.querySelectorAll('.content_title h3');
    const pageDom = document.querySelectorAll('.items');

    pageMenu.forEach(function (item) {
        item.addEventListener('click', function () {
            const clickMenu = this.textContent.toLowerCase();

            pageDom.forEach(function (page) {
                if (page.classList.contains(clickMenu)) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });

            pageMenu.forEach(function (pageMenus) {
                pageMenus.classList.remove('active');
            });

            item.classList.add('active');
        });
    });
});



// audio

// seek bar---------------------------------
// var range = document.getElementById("range");
var completionBar = document.getElementById("completionBar");
// var slide = document.querySelector('.slide input[type="range"]');

var audioSeek = document.getElementById("audioSrc");

// range.oninput = function () {
//     completionBar.style.width = this.value + '%';
//     audioSeek.currentTime = ((this.value / 100)) * audioSeek.duration;
// }


//------------------------------------------

function play(element) {

    // var nowPlayingBoardId = document.getElementById("now-playing-board-id");

    var vynlId = document.getElementById("vynl-id");

    var audio = document.getElementById("audioSrc");

    audio.loop = true;

    // Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed

    if (document.getElementById("playpause").classList.contains("play-circle")) {
        vynlId.classList.add("vynl-animation");

        document.getElementById("audioSrc").play();
        // nowPlayingBoardId.style.transform = "translatey(-30%)";

        document.getElementById("playpause").classList.remove("play-circle");
        document.getElementById("playpause").classList.add("pause-circle");
    }
    else if (document.getElementById("playpause").classList.contains("pause-circle")) {
        vynlId.classList.remove("vynl-animation");

        document.getElementById("audioSrc").pause();
        // nowPlayingBoardId.style.transform = "translatey(56%)";

        document.getElementById("playpause").classList.remove("pause-circle");
        document.getElementById("playpause").classList.add("play-circle");
    }
}

function musicStart() {
    const startBg = document.getElementsByClassName('bg')[0];
    startBg.style.display = 'none';
    play();
}