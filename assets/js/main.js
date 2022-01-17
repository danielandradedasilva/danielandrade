'use strict';




function initAll() {
    revealName();
    effectsOnCards();
}

function effectsOnCards() {
    VanillaTilt.init(document.querySelectorAll(".fff"), {
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
            alert('okkkk')
        }

    })

}

initAll();