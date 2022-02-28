'use strict';

function initAll() {
    /**Links contatos */
    document.querySelector('.linkedin').addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/daniel-andrade-da-silva/');
    });
    document.querySelector('.whatsapp').addEventListener('click', () => {
        window.open('https://web.whatsapp.com/send?phone=5511948307817');
    });
    document.querySelector('.github').addEventListener('click', () => {
        window.open('https://github.com/danielandradedasilva');
    });
}

/**Scroll Top */
window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 950)
})

const scroolTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
document.querySelector('.scrollTop').addEventListener('click', scroolTop);

initAll();