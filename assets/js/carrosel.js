//Cards Portifólio

const principalItens = document.querySelector('#principal');

const info = [

    { 'titulo': 'Dunamis', 'descricao': 'Site feito com HTML, CSS e JS.', 'image': './assets/img/jpg/dunamis.jpg', 'tec': 'Html &nbsp;|&nbsp; Materialize &nbsp;|&nbsp; Javascript', 'linkGitProjeto': 'https://github.com/danielandradedasilva/novo-Site_Dunamis', 'linkGit': 'https://github.com/danielandradedasilva', 'linkLinkedin': 'https://www.linkedin.com/in/daniel-andrade-da-silva/' },

    { 'titulo': 'Calculadora', 'descricao': 'App desenvolvido com JS.', 'image': './assets/img/jpg/calculator.jpg', 'tec': 'Html &nbsp;|&nbsp; Css &nbsp;|&nbsp; Javascript', 'linkGitProjeto': 'https://github.com/danielandradedasilva/calculadora-Js', 'linkGit': 'https://github.com/danielandradedasilva', 'linkLinkedin': 'https://www.linkedin.com/in/daniel-andrade-da-silva/' },

    { 'titulo': 'Finanças', 'descricao': 'App desenvolvido para gerenciar gastos.', 'image': './assets/img/jpg/cofrinho.jpg', 'tec': 'Html &nbsp;|&nbsp; Css &nbsp;|&nbsp; Javascript', 'linkGitProjeto': 'https://github.com/danielandradedasilva/App-Financa', 'linkGit': 'https://github.com/danielandradedasilva', 'linkLinkedin': 'https://www.linkedin.com/in/daniel-andrade-da-silva/' },

    { 'titulo': 'Guardians - Pensão Alimentícia', 'descricao': 'App desenvolvido no curso de Desenvolvimento de Sistemas na ETEC como TCC.<br><br> O aplicativo consiste em auxiliar e estabelecer um relacionamento amigavel, entre pais e mães separados ou quem tem a posse legal da criança.<br><br> Trabalho realizado em grupo.', 'image': './assets/img/jpg/guardians.jpg', 'tec': 'Ionic &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; Firebase', 'linkGitProjeto': 'https://github.com/danielandradedasilva/Guardians', 'linkGit': 'https://github.com/danielandradedasilva', 'linkLinkedin': 'https://www.linkedin.com/in/daniel-andrade-da-silva/' }
]


const loadCards = (container) => {

    info.forEach((info) => {

        container.innerHTML += `
            <div class='content'>
                <div class='content-img'>
                    <img src='${info.image}'>
                    <div class='link'>
                        <button class='btn-link'><a href='${info.linkGit}'>Github</a></button>
                        <button class='btn-link'><a href='${info.linkLinkedin}'>Linkedin</a></button>
                    </div>
                </div>  
                <div class='informacoes'>
                    <span class='titulo-cards'>
                        ${info.titulo}
                    </span>
                    <hr class='hr-cards-port'>
                    <p class='descricao'>
                        ${info.descricao}
                    </p>
                    <hr class='hr-cards-port'>
                    <p class='tecnologias'>
        &nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTecnologias usadas:<br><br>
                        ${info.tec}
                    </p>
                    <div class='btn-git-especifico'>
                        <button class='btn-link'><a href='${info.linkGitProjeto}'>Github</a></button>
                    <div>
                </div>
            </div>

        `
    });
}

loadCards(principalItens);

let items = document.querySelectorAll('.content');

const previous = () => {
    const lestItem = items[items.length - 1];
    principalItens.insertBefore(lestItem, items[0]);
    items = document.querySelectorAll('.content');
}
const nextt = () => {
    principalItens.appendChild(items[0]);
    items = document.querySelectorAll('.content');

}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#nextt').addEventListener('click', nextt);

////////////////////////////////////////////////////////////