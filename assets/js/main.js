'use strict';

function initAll() {

    revealName();

    VanillaTilt.init(document.querySelectorAll(".ffff"), {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.3
    });

}

function revealName() {
    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('imgIcons')) {
            console.log('ok')
        }

    })

}

initAll();