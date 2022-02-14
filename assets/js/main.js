'use strict';

function initAll() {
    effectsOnCards();
    slide();
}

function effectsOnCards() {
    VanillaTilt.init(document.querySelectorAll(".fff"), {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.3
    });
}

const balls = document.querySelector('.balls');
const quant = document.querySelectorAll('.slides .image');
let atual = 0;
const imagem = document.getElementById('atual');
const next = document.querySelector('#next');
const back = document.querySelector('#back');
const toRoll = true;
const cardPortifoilio = document.querySelector('.mural');
const muralContent = document.querySelector('.mural-content');

for (let i = 0; i < quant.length; i++) {
    const div = document.createElement('div');
    div.id = i;
    balls.appendChild(div);
}

document.getElementById('0').classList.add('imgAtual');
let pos = document.querySelectorAll('.balls div');

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        atual = pos[i].id;
        slide();
    })
}

back.addEventListener('click', () => {
    atual--;

    slide();
});
next.addEventListener('click', () => {
    atual++;

    slide();
});

const slide = () => {
    if (atual >= quant.length) {
        atual = 0;
    } else if (atual < 0) {
        atual = quant.length - 1;
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual');
    imagem.style.marginLeft = -480 * atual + 'px';
    document.getElementById(atual).classList.add('imgAtual');

    /* 
     document.querySelector('.mural-atual').classList.remove('.mural-atual');
     cardPortifoilio.style.marginLeft = -450 * atual + 'px';
     document.getElementById(atual).classList.add('.mural-atual');
     */
}

initAll();