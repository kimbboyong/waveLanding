// // 1. 메뉴를 클릭했을때 클릭한 것만 엑티브가 된다
// // 2. 엑트브가 되고 클릭한 내용과 섹션의 내용이 같다면 해당 섹션을 보여주고 다른 섹션은 보여주지 않는다.
// // 3. 

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