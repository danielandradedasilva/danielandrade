'use strict';

function initAll() {
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



document.querySelector('.linkedin').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/daniel-andrade-da-silva/');
});
document.querySelector('.whatsapp').addEventListener('click', () => {
    window.open('https://web.whatsapp.com/send?phone=5511948307817');
});
document.querySelector('.github').addEventListener('click', () => {
    window.open('https://github.com/danielandradedasilva');
});

initAll();